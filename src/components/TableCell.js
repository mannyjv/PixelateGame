//this component is a class because it listens for click events and dispatches the colorize action from the store.

import React from 'react';
import store, { colorize, mouseDown } from '../store';

export default class TableCell extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEvent = this.handleMouseEvent.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    store.dispatch(mouseDown());
    store.dispatch(colorize(this.props.rowIdx, this.props.colIdx));
  }

  handleMouseEvent(e) {
    e.preventDefault();
    if (e.type === 'mousedown') {
      store.dispatch(colorize(this.props.rowIdx, this.props.colIdx));
      store.dispatch(mouseDown());
    } else store.dispatch(mouseDown());
  }

  handleMouseOver() {
    if (this.props.mousedown) {
      store.dispatch(colorize(this.props.rowIdx, this.props.colIdx));
    }
  }

  render() {
    return (
      <td
        className={this.props.color}
        onMouseDown={this.handleMouseEvent}
        onMouseUp={this.handleMouseEvent}
        onMouseOver={this.handleMouseOver}
      ></td>
    );
  }
}
