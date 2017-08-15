/* 
 * TableRow component stateless 
 * Used to only draw a row of cells
 */

import React, { Component, PropTypes } from 'react';
import Cell from './Cell';

class TableRow extends Component {
  
  constructor(props) {
    super(props);    
  }

  static propTypes = {
    cellSize: PropTypes.number.isRequired,
    rowIndex: PropTypes.number.isRequired,
    rowData: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const cellSize = this.props.cellSize;
    const rowPosition = this.props.rowIndex;   
    const rowTemplate = this.props.rowData.map( (cellData, columnPosition) => (
        <Cell key={columnPosition}              
              columnPosition={columnPosition} 
              rowPosition={rowPosition}
              cellData={cellData} 
              showDeleteControls={this.props.showDeleteControls}
              hideDeleteControls={this.props.hideDeleteControls}
        />
    ));

    return (
      <div className="row">
        {rowTemplate}
      </div>
    );
  }

}

export default TableRow;