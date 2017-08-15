/* 
 * MyTable component
 * uses rows, cells, controls
 */

import React, { Component, PropTypes } from 'react';
import TableRow from 'TableRow';
import Cell from 'Cell';
import Panel from 'Panel';
import Button from 'Button';

class MyTable extends Component {
  
  constructor(props) {
    super(props);    
    this.state = {
      allCels: this.props.,
      showDelColButton: false,
      showDelRowButton: false,
      currentPosition: {colPostion: -1, rowPosition: -1}
    }
    this.showDelButton = this.showDelButton.bind(this);
  }

  static propTypes = {
    cellData: PropTypes.array.isRequired    
  }

  showDelButton(coords) {
    const {curCol, curRow} = coords;
    const rowsAmount = this.props.allCels.length;
    let showDelColButton =  (colsAmount > 1) ;
    if ( rowsAmount <= 1 || !curCol) curCol = -1;
    if ( colsAmount <= 1 || !curRow) curRow = -1;
    this.setState({
      currentPosition: {colPostion: curCol, rowPosition: curRow}
      showDelColButton: false,
      showDelRowButton: false     
    })
  }

  render() {

    const tableTemplate = this.props.allCells.map( function(rowData, rowIndex) {
      return (
        <TableRow key={rowIndex} rowData={rowData} />
        );
    });
    
    return (
      <div className="main">
        {tableTemplate}

        
        {/* 
        <div class="delrow_panel"> 
          <div className="btn btn__del btn__del-row none"></div> 
        </div> 
        */}
        <Panel type="delrow_panel" onHover={this.showDelButton}/> 
        
        {/*
        <div className="delcol_panel">
          <div className="btn btn__del btn__del-col none"></div>
        </div>
        */}
        <Panel type="delcol_panel" onHover={}/> 

        <Button type='new_row' /> {/* <div className="btn btn__add btn__add-row"></div> */}
        <Button type='new_column' /> {/* <div className="btn btn__add btn__add-col"></div> */}

      </div>
    );
  }

}