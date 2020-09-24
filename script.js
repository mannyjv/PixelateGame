// Your code here

const tableDom = document.getElementsByTagName("table")[0]
let color = "red";
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
  if (event.target.tagName === 'TD'){
  if ((event.target.className.length) && (event.target.className === color)) {
    event.target.className = "";
  }
  else {
    event.target.className = color;
  }}
}
tableDom.addEventListener("click", colorize)

const select = document.getElementsByTagName('select')[0];

select.addEventListener("change", changeColor)

function changeColor(event){
color = event.target.value;
}


