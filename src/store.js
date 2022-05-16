import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger'; //prints out useful information about everything that happens in your store

// implement the state of the display as an empty array, Each pixel will be a string representing the color for that pixel. Blank pixels can be represented by an empty string: ''
//will represent 1 row of 20 cells- the first row- default
const NUM_COLUMNS = 20; //essentially each new row will be this [Array(20).fill('')], each element(row) is an array with 20 elements in it of "" empty strings at first before colors occurs
const initialState = {
  grid: [],
};

// ACTION TYPES
const ADD_ROW = 'ADD_ROW';

// ACTION CREATORS
export const addRow = () => ({ type: ADD_ROW });

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ROW:
      const newRow = Array(NUM_COLUMNS).fill(''); //fill new array, with 20 elements ("")
      //spread operator returns a *new* object, not a mutated one
      return { ...state, grid: [...state.grid, newRow] };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware));
export default store;
