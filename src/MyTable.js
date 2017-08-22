/* 
 * MyTable component
 * uses rows, control panels and add buttons
 */

import React, { Component, PropTypes } from 'react';
import TableRow from './TableRow';
import AddButton from './AddButton'
import DeleteButton from './DeleteButton'

class MyTable extends Component {
  
  constructor(props) {
    super(props);    
    this.state = {
      cellsData: this.props.allCells,
      isDelRowBtnShown: false,
      DelRowBtnPosition: -1,
      isDelColumnBtnShown: false,
      DelColumnBtnPosition: -1
    }
    this.showDeleteControls = this.showDeleteControls.bind(this);
    this.hideDeleteControls = this.hideDeleteControls.bind(this);
    this.addRowHandler = this.addRowHandler.bind(this);
    this.addColumnHandler = this.addColumnHandler.bind(this);
    this.deleteLine = this.deleteLine.bind(this);
  }

  static propTypes = {
    allCells: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
    cellSize: PropTypes.number.isRequired,
  }

  randomId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
  }

  randomContent() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }

  showDeleteControls(coords) {    
    const data = this.state.cellsData;
    const rowsAmount = data.length;
    const columnsAmount = data[0].length;    

    this.setState({
      isDelRowBtnShown: (rowsAmount > 1),
      DelRowBtnPosition: coords.row,
      isDelColumnBtnShown: (columnsAmount > 1),
      DelColumnBtnPosition: coords.col
    });
  }
  
  hideDeleteControls(coords) {    
    this.setState({
      isDelRowBtnShown: false,
      isDelColumnBtnShown: false
    });
  }

  addRowHandler() {
    let data = this.state.cellsData;
    let newContent = this.randomContent();
    let newRow = new Array();
    for(let i = 0; i < data[0].length; i++) {      
      newRow[i] = {
          id: this.randomId(),
          content: newContent
          };            
    }
    data.push(newRow);
    this.setState({cellsData: data});
  }

  addColumnHandler() {
    let data = this.state.cellsData;    
    let newContent = this.randomContent();
    for(let j = 0; j < data.length; j++) {      
      let newCell = { 
        id: this.randomId(),
        content: newContent
      };
      data[j].push( newCell );            
    }
   
    this.setState({cellsData: data});
  }

  deleteLine(delDirection, position) {
    console.log(`deleteLine(${delDirection}, ${position})`);
    let data = this.state.cellsData;

    if (delDirection === 'delRow' && data.length > 1) {
      data.splice(position, 1);
    } else if (delDirection === 'delColumn' && data[0].length > 1) {
      data = data.filter( (rowData, rowIndex) => rowData.splice(position, 1) );
    }
    this.setState({cellsData: data});
  }
  
  render() {
    const cellSize = this.props.cellSize;
    const cellsData = this.state.cellsData;
    const isDelRowBtnShown = this.state.isDelRowBtnShown;
    const DelRowBtnPosition = this.state.DelRowBtnPosition;
    const isDelColumnBtnShown = this.state.isDelColumnBtnShown;
    const DelColumnBtnPosition = this.state.DelColumnBtnPosition; 
    const self = this;
    const width = cellSize * cellsData[0].length; // current width of MyTable in pixels
    const tableTemplate = cellsData.map( function(rowData, rowIndex) {
        return (
          <TableRow key={rowIndex}
                    cellSize={cellSize}
                    rowIndex={rowIndex}  
                    rowData={rowData}
                    isFancy={self.props.isFancy} 
                    showDeleteControls={self.showDeleteControls}
                    hideDeleteControls={self.hideDeleteControls}
          />
        );
      });
    const leftPanelButtons = cellsData.map( function(rowData, rowIndex) {
        return (
          <DeleteButton key={rowIndex}                    
                    btnPosition={rowIndex}  
                    btnType="delRow"
                    isShown={isDelRowBtnShown 
                            && (DelRowBtnPosition === rowIndex)}
                    mouseOverHandler={self.showDeleteControls}
                    mouseOutHandler={self.hideDeleteControls}
                    onDelBtnClick={self.deleteLine}                    
          />
        );
      });
    
    const topPanelButtons = cellsData[0].map( function(cellData, colIndex) {
        return (
          <DeleteButton key={colIndex}                    
                    btnPosition={colIndex}  
                    btnType="delColumn"
                    isShown={isDelColumnBtnShown 
                            && (DelColumnBtnPosition === colIndex)}
                    mouseOverHandler={self.showDeleteControls}
                    mouseOutHandler={self.hideDeleteControls}                           
                    onDelBtnClick={self.deleteLine}                    
          />
        );
      });

    const myTableStyle = {
      width: width+'px'
    };

    return (
      <div className="MyTable" style={myTableStyle} >
        
        {tableTemplate}

        <div className="left_panel" style={ {width: cellSize + 'px'} }>
          {leftPanelButtons}
        </div>
        
        <div className="top_panel" style={ {width: width + 'px'} }>
          {topPanelButtons}
        </div>
         

      <AddButton  type="addRow" 
                  addRowHandler={this.addRowHandler}  />
      <AddButton  type="addColumn"
                  addColumnHandler={this.addColumnHandler} />
      

      </div>
    );
  }

}

export default MyTable;