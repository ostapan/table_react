/* 
 * MyTable component
 * Renders table of cells and control buttons
 */

import React, { Component } from 'react';
import Cell from './Cell';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';
import './MyTable.css';

class MyTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: this.props.tableData,
      delRowBtnPosition: 0,
      delColumnBtnPosition: 0,
      delRowBtnShown: false,
      delColumnBtnShown: false,
    };
  }

  getRandomId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = (c === 'x') ? r : ((r & 0x3) | 0x8);
      return v.toString(16);
    });
  }

  getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  addRow = () => {
    const data = [...this.state.tableData];
    const newColor = this.getRandomColor(); // same color for all cells in new row
    const newRow = [];
    for (let i = 0; i < data[0].length; i++) {
      newRow.push({
        id: this.getRandomId(),
        color: newColor,
      });
    }
    data.push(newRow);
    this.setState({ tableData: data });
  }

  addColumn = () => {
    const data = [...this.state.tableData];
    const newColor = this.getRandomColor(); // same color for all cells in new column    
    data.forEach(rowData =>
      rowData.push({
        id: this.getRandomId(),
        color: newColor,
      }),
    );
    this.setState({ tableData: data });
  }

  deleteLine = (delDirection, position) => {
    let data = [...this.state.tableData];
    let delRowBtnShown = this.state.delRowBtnShown;
    let delColumnBtnShown = this.state.delRowBtnShown;
    
    if (delDirection === 'delRow' && data.length > 1) {
      data.splice(position, 1);
      delRowBtnShown = false;
      this.setState({
        tableData: data,
        delRowBtnShown,
        delColumnBtnShown,
      });     
    } 

    if (delDirection === 'delColumn' && data[0].length > 1) {
      data = data.filter(rowData => [...rowData].splice(position, 1));
      delColumnBtnShown = false;
      this.setState({
        tableData: data,
        delRowBtnShown,
        delColumnBtnShown,
      });

  }

  showDelButtons = (position) => {
    const data = this.state.tableData;
    const rowsAmount = data.length;
    const columnsAmount = data[0].length;

    this.setState({
      delRowBtnShown: (rowsAmount > 1),
      delColumnBtnShown: (columnsAmount > 1),
      delRowBtnPosition: position.row,
      delColumnBtnPosition: position.column,
    });
  }

  hideDelButtons = () => {
    this.setState({
      delRowBtnShown: false,
      delColumnBtnShown: false,
    });
  }

  getTableStructure() {
    const data = this.state.tableData;
    const isFancy = this.props.isFancy;
    const showDelButtons = this.showDelButtons;

    return (
      <table className="mytable__table">
        <tbody>

          {
            data.map((rowData, rowIndex) => (

              <tr key={`rowkey__${rowData[0].id}`}>
                {
                  rowData.map((cellData, columnIndex) => (
                    <Cell
                      key={cellData.id}
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
      <main className="mytable" onMouseLeave={this.hideDelButtons}>
        <div className="mytable__container">

          <DeleteButton
            type="delRow"
            position={this.state.delRowBtnPosition}
            isShown={this.state.delRowBtnShown}
            onDeleteHandler={this.deleteLine}
          />

          <DeleteButton
            type="delColumn"
            position={this.state.delColumnBtnPosition}
            isShown={this.state.delColumnBtnShown}
            onDeleteHandler={this.deleteLine}
          />

          {this.getTableStructure()}

          <AddButton
            type="addRow"
            onAddHandler={this.addRow}
            isFancy={this.props.isFancy}
          />

          <AddButton
            type="addColumn"
            onAddHandler={this.addColumn}
            isFancy={this.props.isFancy}
          />

        </div>
      </main>
    );
  }
}

export default MyTable;
