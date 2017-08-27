/* 
 * MyTable component
 * Renders table of cells and control buttons
 */

import React, { Component } from 'react';
import Cell from './Cell';
import AddButton from './AddButton'
import DeleteButton from './DeleteButton'
import './MyTable.css'

class MyTable extends Component {

  constructor(props) {
    super(props);    
    this.state = {
      tableData: this.props.tableData,
      delRowBtnPosition: 0,
      delColumnBtnPosition: 0,
      delRowBtnShown: false,
      delColumnBtnShown: false
    }
    this._addRow = this._addRow.bind(this);
    this._addColumn = this._addColumn.bind(this);
    this._deleteLine = this._deleteLine.bind(this);
    this._showDelButtons = this._showDelButtons.bind(this);    
    this._hideDelButtons = this._hideDelButtons.bind(this);
  }

  _getRandomId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0;
        let v = (c === 'x') ? r : ((r & 0x3) | 0x8);
        return v.toString(16);
      });
  }

  _getRandomColor() {    
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }

  _addRow() {
    let data = [...this.state.tableData];
    let newColor = this._getRandomColor(); // same color for all cells in new row
    let newRow = [];
    for(let i = 0; i < data[0].length; i++) {      
      newRow.push({
          id: this._getRandomId(),
          color: newColor
          });            
    }
    data.push(newRow);
    this.setState({tableData: data});
  }

  _addColumn() {    
    let data = [...this.state.tableData];    
    const newColor = this._getRandomColor(); // same color for all cells in new column    
    data.forEach( (rowData) =>         
        rowData.push({ 
            id: this._getRandomId(),
            color: newColor
          })     
      );
    this.setState({tableData: data});
  }

  _deleteLine(delDirection, position) {
    let data = [...this.state.tableData];
    let delRowBtnShown = this.state.delRowBtnShown;
    let delColumnBtnShown = this.state.delRowBtnShown;
    if ('delRow' === delDirection && data.length > 1) {
      data.splice(position, 1);
      delRowBtnShown = false;
    } else if ('delColumn' === delDirection && data[0].length > 1) {
      data = data.filter( (rowData) => rowData.splice(position, 1) );
      delColumnBtnShown = false;
    } else {
      return;
    }
    
    this.setState({
        tableData: data,
        delRowBtnShown: delRowBtnShown,
        delColumnBtnShown: delColumnBtnShown
      });
  }

  _showDelButtons(position) {
    const data = this.state.tableData;
    const rowsAmount = data.length;
    const columnsAmount = data[0].length;    

    this.setState({
      delRowBtnShown: (rowsAmount > 1),
      delColumnBtnShown: (columnsAmount > 1),
      delRowBtnPosition: position.row,      
      delColumnBtnPosition: position.column
    });
  }

  _hideDelButtons() {
    this.setState({
      delRowBtnShown: false,
      delColumnBtnShown: false      
    });
  }

  _getTableStructure() {
    const data = this.state.tableData;
    const isFancy = this.props.isFancy;
    const showDelButtons = this._showDelButtons;
    
    return (
        <table className="mytable__table">
          <tbody>
            
            {
              data.map( (rowData, rowIndex) => (

                  <tr key={this._getRandomId()}>                  
                  {
                    rowData.map( (cellData, columnIndex) => (                    
                      <Cell key={cellData.id}
                            row={rowIndex}
                            column={columnIndex}
                            data={cellData}
                            isFancy={isFancy}
                            mouseOverHandler={showDelButtons}
                      />
                    ))
                  }
                  </tr>
              ))
            }

          </tbody>
        </table>
    ); 
  }

  render() {
    return (      
      <main className="mytable" onMouseLeave={this._hideDelButtons}>
        <div className="mytable__container">

          <DeleteButton type="delRow"
                        position={this.state.delRowBtnPosition}  
                        isShown={this.state.delRowBtnShown}
                        onDeleteHandler={this._deleteLine} />

          <DeleteButton type="delColumn"
                        position={this.state.delColumnBtnPosition}  
                        isShown={this.state.delColumnBtnShown}
                        onDeleteHandler={this._deleteLine} />
          
          {this._getTableStructure()}

          <AddButton  type="addRow" 
                      onAddHandler={this._addRow} 
                      isFancy={this.props.isFancy} />
          
          <AddButton  type="addColumn" 
                      onAddHandler={this._addColumn}
                      isFancy={this.props.isFancy} />
        
        </div>
      </main>
    );
  }

}

export default MyTable;