/* 
 * Cell component
 * Renders one cell, passes mouseOver event handling to parent
 */

import React, { Component } from 'react';

class Cell extends Component {

  constructor(props) {
    super(props);
    this._onMouseOverCell = this._onMouseOverCell.bind(this);
  }

  _onMouseOverCell() {
    const position = {
      row: this.props.row, 
      column: this.props.column
    };
    this.props.mouseOverHandler(position);    
  }
  
  render() {   
    const data = this.props.data;
    const cellStyle =  this.props.isFancy ? {backgroundColor: data.color} : {};    
    return (
      <td className='mytable__cell' 
          style={cellStyle}
          onMouseOver={this._onMouseOverCell}
      ></td>
    );
  }  

}

export default Cell;