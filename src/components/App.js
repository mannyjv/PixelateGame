import React from 'react';
import Table from './Table.js';
import store, { addRow, pickColor } from '../store.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState(); //an initial state when component mounts
    //use grid data in the render method- each row = a <tr> | each cell in the row = a <td>

    this.handleAddRowClick = this.handleAddRowClick.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }
  //after component is mounted- subscribe to further updates
  componentDidMount() {
    //store.subscribe returns a function that will destroy the subscription (ie. unsubscribe).
    //so now this class instance will have a method 'unsuscribe' which actually is assigned that returned function to destroy the subscription.
    this.unsubscribe = store.subscribe(() => this.setState(store.getState())); //callback function will execute on every store update, resets state to keep it updated
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleAddRowClick() {
    store.dispatch(addRow());
  }
  handleColorChange(event) {
    store.dispatch(pickColor(event.target.value));
  }

  render() {
    return (
      <div id="pixelate">
        <h1>Pixelate</h1>
        <div id="buttons-container">
          <button id="add-row" onClick={this.handleAddRowClick}>
            Add a row
          </button>
          <select onChange={this.handleColorChange}>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="brown">Brown</option>
          </select>
        </div>
        <Table grid={this.state.grid} />
      </div>
    );
  }
}
