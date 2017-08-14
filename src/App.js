import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import EventEmittrer from 'events';
import MyTable from './MyTable';

//window.ee = new EventEmitter();

const DEFAULT_CELL_SIZE = 50;
const DEFAULT_ROWS_NUMBER = 4;
const DEFAULT_COLS_NUMBER = 4;

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state.cols = DEFAULT_COLS_NUMBER;
    this.state.rows = DEFAULT_ROWS_NUMBER;
  }

  deleteRow() {
    let prevRows = this.state.rows;
    if (prevRows > 1) prevRows--;
    setState({ rows: prevRows});
  }

  deleteCol() {
    let prevCols = this.state.cols;
    if (prevCols > 1) prevCols--;
    setState({ rows: prevCols});
  }

  // componentDidMount(){
  //   var self = this;
    
  //   window.ee.addListener('Row.add', function() {
  //     var nextRows = self.state.rows + 1;
  //     self.setState({rows: nextRows});
  //   });

  //   window.ee.addListener('Col.add', function() {
  //     var nextCols = self.state.cols + 1;
  //     self.setState({cols: nextCols});
  //   });

  //   window.ee.addListener('Row.del', function() {
  //     var nextRows = self.state.rows - 1;
  //     self.setState({rows: nextRows});
  //   });

  //   window.ee.addListener('Col.del', function() {
  //     var nextColws = self.state.cols - 1;
  //     self.setState({cols: nextCols});
  //   });

  // }

  // componentWillUnmount() {
  //   window.ee.removeListener('Row.add');    
  //   window.ee.removeListener('Row.del');
  //   window.ee.removeListener('Col.add');
  //   window.ee.removeListener('Col.del');
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>MyTable on ReactJS</h2>
        </div>
        <div className='myTable'>
          <MyTable 
            cols={this.state.cols} 
            rows={this.state.rows} 
            />
        </div>
      </div>
    );
  }
}

export default App;
