const path = require("path");

module.exports = {
  mode: "development", // Set the mode to 'production' for production builds
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "build"), // Change the output path to create a 'build' folder
    filename: "bundle.js",
    publicPath: "/",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
};
