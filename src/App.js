/*
 * App root component
 * Sets initial data 
 * Can switch to color-mode fancy state
 */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyTable from './MyTable';
import { data } from './data'

const INITIAL_DATA = data;

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
        <aside>
          <input  id="enableFancy"
                    type='checkbox'
                    defaultChecked={this.state.isFancy}                      
                    onClick={this.onFancyClick} />
          <label htmlFor="enableFancy">Enable fancy color mode</label>
        </aside>
        <MyTable  tableData={INITIAL_DATA}                  
                  isFancy={this.state.isFancy} />        
      </div>
    );
  }
}

export default App;