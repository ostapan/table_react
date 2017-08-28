/* 
 * Cell component
 * Renders one cell, passes mouseOver event handling to parent
 */

import React, { Component } from 'react';

class Cell extends Component {

  onMouseOverCell = () => {
    const position = {
      row: this.props.row,
      column: this.props.column,
    };
    this.props.mouseOverHandler(position);
  }

  render() {
    const data = this.props.data;
    const cellStyle = this.props.isFancy ? { backgroundColor: data.color } : {};
    return (
      <td
        className="mytable__cell"
        style={cellStyle}
        onMouseOver={this.onMouseOverCell}
      />
    );
  }
}

export default Cell;
