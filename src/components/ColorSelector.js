import React from 'react';
//component receives the selected color on state from the app.js parent component, no need to subscribe to store in here also

export default function ColorSelector(props) {
  return (
    <select onChange={props.onChange} value={props.selectedColor} class="btn">
      {props.colors.map((color) => (
        <option key={color} value={color}>
          {color}
        </option>
      ))}
    </select>
  );
}
