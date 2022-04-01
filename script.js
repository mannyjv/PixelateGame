const table = document.getElementsByTagName('table')[0]; //grab parent table element, must be indexed into since an this document method for finding elements returns an html collection
const addRowButton = document.getElementById('add-row'); //grabbing the add row button so we can attach an event listener
const select = document.getElementsByTagName('select')[0]; //grabbing select parent element that hosts the inner children option children elements for choosing each color
const clearGridButton = document.getElementById('clear-grid');

let chosenColor = 'red'; //default red as chosen color on load

select.addEventListener('change', changeColor); //event object automatically gets passed as argument to the changeColor event handler function
addRowButton.addEventListener('click', makeRow); //click event listener on addRowButton will invoke the makeRow func each time
table.addEventListener('click', colorize); //lick is fired after a full click action occurs;the mouse button is pressed and released while the pointer remains inside the same element.
table.addEventListener('mousedown', addMouseOver); //user clicks down on mouse and drags/hovers to other elements while click is still down- doesnt invoke colorize itself, instead invokes addMouseOver event which adds a listener to table for mouseover which then invokes colorize func
table.addEventListener('mouseup', removeMouseOver); //fired at an Element when a button on a pointing device (such as a mouse or trackpad) is released while the pointer is located inside it.- handler is removeMouseOver which removes the mouseover listen from the table element
clearGridButton.addEventListener('click', clearGrid);

function makeRow() {
  //func to create a new row will trigger everytime user clicks "add a row"
  const newRow = document.createElement('tr'); //new row created

  for (let i = 0; i < 20; i++) {
    //for loop will create the right number of cells inside the row and append new cell to end each loop
    const newCell = document.createElement('td');
    newRow.appendChild(newCell); //to be inserted at the end of a parent node
  }

  table.appendChild(newRow); //append new finished row to be last row of table
}

function colorize(event) {
  //func will trigger each time someone clicks on a cell in a row in the table
  const target = event.target;
  if (target.tagName === 'TD') {
    //make sure a td element had the click event and not the a tr(row) or the table itself, if user accidently clicks in the space between the cells

    //We'll determine a cell's color by the presence or absence of a CSS class.
    if (target.className.length && target.className === chosenColor) {
      //this is for the case when a cell DOES already have a class (its already colored in) and the class name is === to the current chosen color, then we want to toggle its class basically remove the class so the cell that got clicked is no longer colored in and will be light gray again/ css rules
      target.className = '';
    } else {
      //otherwise the cell that got clicked either isnt colored in and doesnt have a class color, or it is colored in but its not the color that the current selected color is, here we want to color the cell the selected color, so it will got from either lightgray to selected color, or from another color to current selected color
      target.className = chosenColor;
    }
  }
}

function changeColor(event) {
  //func to change the reassign the color variable (line 4) after user has selected a new color to use
  chosenColor = event.target.value;
}

function addMouseOver() {
  //triggered when user clicks down and moves pointer to other elements while click is still down
  //table should now listen for the mouseover event that is fired at an Element when a pointing device (such as a mouse or trackpad) is used to move the cursor onto the element or one of its child elements. every time this event triggered we will invoke colorize to color each element the mouse is hovering over.
  table.addEventListener('mouseover', colorize);
}

function removeMouseOver() {
  //simply removes the mouseover event so that the coloring stops
  table.removeEventListener('mouseover', colorize);
}

function clearGrid() {
  const allGridCells = Array.from(document.getElementsByTagName('td'));

  allGridCells.forEach((cell) => {
    cell.className = 'clear';
  });
}
