import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger'; //prints out useful
// information about everything that happens in your store

const initialState = {};

// ACTION TYPES

// ACTION CREATORS

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware));
export default store;
