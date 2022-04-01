// Your code here

const tableDom = document.getElementsByTagName('table')[0]; //grab parent table element, must be indexed into since an this document method for finding elements returns an html collection
let chosenColor = 'red'; //default red as chosen color on load

function makeRow() {
  //func to create a new row will trigger everytime user clicks "add a row"
  const newRow = document.createElement('tr'); //new row created

  for (let i = 0; i < 20; i++) {
    //for loop will create the right number of cells inside the row and append new cell to end each loop
    const newCell = document.createElement('td');
    newRow.appendChild(newCell); //to be inserted at the end of a parent node
  }

  tableDom.appendChild(newRow); //append new finished row to be last row of table
}

const addRowButton = document.getElementById('add-row'); //grabbing the add row button so we can attach an event listener

addRowButton.addEventListener('click', makeRow); //click event listener on addRowButton will invoke the makeRow func each time

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
tableDom.addEventListener('click', colorize); //add event listener on parent table element, will trigger colorize fun each time

const select = document.getElementsByTagName('select')[0]; //grabbing select parent element that hosts the inner children option children elements for choosing each color

select.addEventListener('change', changeColor); //event object automatically gets passed as argument to the changeColor event handler function

function changeColor(event) {
  //func to change the reassign the color variable (line 4) after user has selected a new color to use
  chosenColor = event.target.value;
}
