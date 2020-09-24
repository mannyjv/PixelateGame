// Your code here

const tableDom = document.getElementsByTagName("table")[0]

function makeRow() {
  const newRow = document.createElement("tr")

  for (let i = 0; i < 20; i++) {
    const newCell = document.createElement("td")
    newRow.appendChild(newCell);
  }

  tableDom.appendChild(newRow);
}

const addRowButton = document.getElementById("add-row")

addRowButton.addEventListener("click", makeRow)

function colorize(event) {
  if (event.target.className.length) {
    event.target.className = "";
  }
  else {
    event.target.className = "red";
  }
  //console.log("clicked")
}

tableDom.addEventListener("click", colorize)

