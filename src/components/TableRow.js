import React from 'react';
import TableCell from './TableCell.js';

export default function TableRow(props) {
  return (
    <tr>
      {props.row.map((color, colIdx) => (
        <TableCell
          key={colIdx}
          rowIdx={props.rowIdx}
          colIdx={colIdx}
          color={color}
          mousedown={props.mousedown}
        />
      ))}
    </tr>
  );
}
