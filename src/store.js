import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger'; //prints out useful information about everything that happens in your store

//all colors user can choose from
export const AVAILABLE_COLORS = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
  'black',
  'white',
  'brown',
];

// implement the state of the display as an empty array, Each pixel will be a string representing the color for that pixel. Blank pixels can be represented by an empty string: ''
//will represent 1 row of 20 cells- the first row- default
const NUM_COLUMNS = 20; //essentially each new row will be this [Array(20).fill('')], each element(row) is an array with 20 elements in it of "" empty strings at first before colors occurs
const initialState = {
  grid: [],
  mousedown: false,
  selectedColor: AVAILABLE_COLORS[0], //set default chosen color to 'red'
};

// ACTION TYPES
const ADD_ROW = 'ADD_ROW';
const PICK_COLOR = 'PICK_COLOR';
const COLORIZE = 'COLORIZE';
const CLEAR_GRID = 'CLEAR_GRID';
const MOUSE_DOWN = 'MOUSE_DOWN';

// ACTION CREATORS
export const addRow = () => ({ type: ADD_ROW });
export const pickColor = (color) => ({ type: PICK_COLOR, color });
export const colorize = (row, column) => ({ type: COLORIZE, row, column }); //takes in a row and column and return an action object
export const clearGrid = () => ({ type: CLEAR_GRID });
export const mouseDown = () => ({ type: MOUSE_DOWN });

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ROW:
      const newRow = Array(NUM_COLUMNS).fill(''); //fill new array, with 20 elements ("")
      //spread operator returns a *new* object, not a mutated one
      return { ...state, grid: [...state.grid, newRow] };
    case PICK_COLOR:
      return { ...state, selectedColor: action.color };
    case COLORIZE: // set the specified row/column in the grid with the value of selectedColor
      let newGrid = [...state.grid]; //copy what the grid currently looks like, num of rows etc.
      newGrid[action.row] = [...newGrid[action.row]]; //making a new copy of the actual row  to avoid mutating existing data

      if (newGrid[action.row][action.column] === state.selectedColor) {
        newGrid[action.row][action.column] = '';
      } else newGrid[action.row][action.column] = state.selectedColor; //now that specific cell has the value of the selected color instead of an empty string - this matters because that cell(element) in the row array will now have a value of a string color, which will then be used to give it the className to style/color with css
      return { ...state, grid: newGrid };
    case CLEAR_GRID:
      newGrid = [...state.grid].map((row) => {
        return row.map((cell) => {
          return (cell = '');
        });
      });
      return { ...state, grid: newGrid };
    case MOUSE_DOWN:
      return { ...state, mousedown: !state.mousedown };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware));
export default store;
