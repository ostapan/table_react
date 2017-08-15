/* 
 * Cell component
 * Used to one and only cell
 */

import React, { Component, PropTypes } from 'react';

class Cell extends Component {
  
  constructor(props) {
    super(props);
    this.onMouseOverCell = this.onMouseOverCell.bind(this);
    this.onMouseOutCell = this.onMouseOutCell.bind(this);
  }

  static propTypes = {    
    columnPosition: PropTypes.number.isRequired,
    rowPosition: PropTypes.number.isRequired,
    cellData: PropTypes.object
  }

  onMouseOverCell() {
    // console.log('in:' + this.props);
    const coords = {
      row: this.props.rowPosition, 
      col: this.props.columnPosition
    };
    this.props.showDeleteControls(coords);
  }

  onMouseOutCell() {
    // console.log('out:' + this.props);
    const coords = {
      row: this.props.rowPosition, 
      col: this.props.columnPosition
    };
    this.props.hideDeleteControls(coords);   
  }

  render() {
    const cellSize = this.props.cellSize;
    const rowPosition = this.props.rowPosition;
    const columnPosition = this.props.columnPosition;

    return (
      <div  className='cell' 
            onMouseOver={this.onMouseOverCell}
            onMouseOut={this.onMouseOutCell} ></div>
    );
  }

}

export default Cell;