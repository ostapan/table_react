import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyTable from './MyTable';

//window.ee = new EventEmitter();

const DEFAULT_CELL_SIZE = 50;

const initialCellsArray = [
  [
    {
      id: '001001',
      content: '11'
    },
    {
      id: '001002',
      content: '12'
    },
    {
      id: '001003',
      content: '13'
    },
    {
      id: '001004',
      content: '14'
    }
  ],
  [
    {
      id: '002001',
      content: '21'
    },
    {
      id: '002002',
      content: '22'
    },
    {
      id: '002003',
      content: '23'
    },
    {
      id: '002004',
      content: '24'
    }
  ],
  [
    {
      id: '003001',
      content: '31'
    },
    {
      id: '003002',
      content: '32'
    },
    {
      id: '003003',
      content: '33'
    },
    {
      id: '003004',
      content: '34'
    }
  ],
  [
    {
      id: '004001',
      content: '41'
    },
    {
      id: '004002',
      content: '42'
    },
    {
      id: '004003',
      content: '43'
    },
    {
      id: '004004',
      content: '44'
    }
  ]
];

class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>MyTable on ReactJS</h2>
        </div>
        <div className='myTable'>
          <MyTable 
            allCells = {initialCellsArray}
            cellSize = {DEFAULT_CELL_SIZE}
            />
        </div>
      </div>
    );
  }
}

export default App;
