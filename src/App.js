/*
 * App root component
 * Sets initial data 
 * Can switch to color-mode fancy state
 */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyTable from './MyTable';

let initialCellsArray = Array(4);
for (let i = 0; i < 4; i++) {  
  initialCellsArray[i] = Array(4);
  let rowColor = getRandomColor();
  for (let j = 0; j < 4; j++) {    
    initialCellsArray[i][j] = {
      id: getRandomId(),
      color: rowColor
    };
  }
}

function getRandomId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0;
      let v = (c === 'x') ? r : ((r & 0x3) | 0x8);
      return v.toString(16);
    });
}

function getRandomColor() {    
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isFancy: false
    }
    this.onFancyClick = this.onFancyClick.bind(this);
  }

  onFancyClick(event) {
    event.stopPropagation();
    this.setState({
      isFancy: !this.state.isFancy
    });
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h2>MyTable on ReactJS</h2>        
        </header>
        <form method="get" action="#">
          <label>
              <input  type='checkbox'
                      defaultChecked={this.state.isFancy}                      
                      onClick={this.onFancyClick}
              />Enable color mode
          </label>
          </form>        

        <MyTable  tableData={initialCellsArray}                  
                  isFancy={this.state.isFancy} />        
      </div>
    );
  }
}

export default App;