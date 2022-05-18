import React from 'react';
import Table from './Table.js';
import ColorSelector from './ColorSelector.js';
import store, {
  addRow,
  pickColor,
  clearGrid,
  AVAILABLE_COLORS,
} from '../store.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState(); //an initial state when component mounts
    //use grid data in the render method- each row = a <tr> | each cell in the row = a <td>

    this.handleAddRowClick = this.handleAddRowClick.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleClearGrid = this.handleClearGrid.bind(this);
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

  handleClearGrid() {
    store.dispatch(clearGrid());
  }

  render() {
    return (
      <div id="pixelate">
        <h1>Pixelate</h1>
        <div id="buttons-container">
          <button id="add-row" class="btn" onClick={this.handleAddRowClick}>
            Add a row
          </button>
          <ColorSelector
            colors={AVAILABLE_COLORS}
            selectedColor={this.state.selectedColor}
            onChange={this.handleColorChange}
          />
          <button id="clear-grid" class="btn" onClick={this.handleClearGrid}>
            Clear grid
          </button>
        </div>
        <Table grid={this.state.grid} mousedown={this.state.mousedown} />
      </div>
    );
  }
}
