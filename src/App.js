import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyTable from './MyTable';

//window.ee = new EventEmitter();

export const FANCY_MODE = true;

const DEFAULT_CELL_SIZE = 50;
const initialCellsArray = [
  [
    {
      id: '001001',
      content: '#48AAE6'
    },
    {
      id: '001002',
      content: '#48AAE6'
    },
    {
      id: '001003',
      content: '#48AAE6'
    },
    {
      id: '001004',
      content: '#48AAE6'
    }
  ],
  [
    {
      id: '002001',
      content: '#48AAE6'
    },
    {
      id: '002002',
      content: '#48AAE6'
    },
    {
      id: '002003',
      content: '#48AAE6'
    },
    {
      id: '002004',
      content: '#48AAE6'
    }
  ],
  [
    {
      id: '003001',
      content: '#48AAE6'
    },
    {
      id: '003002',
      content: '#48AAE6'
    },
    {
      id: '003003',
      content: '#48AAE6'
    },
    {
      id: '003004',
      content: '#48AAE6'
    }
  ],
  [
    {
      id: '004001',
      content: '#48AAE6'
    },
    {
      id: '004002',
      content: '#48AAE6'
    },
    {
      id: '004003',
      content: '#48AAE6'
    },
    {
      id: '004004',
      content: '#48AAE6'
    }
  ]
];

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isFancy: false
    }
    this.onFancyClick = this.onFancyClick.bind(this);
  }

  onFancyClick() {
    this.setState({
      isFancy: !this.state.isFancy
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>MyTable on ReactJS</h2>
        </div>
        <div className='myTable'>
          <label>
            <br />
            <input  type='checkbox'
                    defaultChecked={this.state.isFancy}                      
                    onClick={this.onFancyClick}
            />
            Enable color mode
          </label>

          <MyTable 
            allCells={initialCellsArray}
            cellSize={DEFAULT_CELL_SIZE}
            isFancy={this.state.isFancy}
            />
        </div>
      </div>
    );
  }
}

export default App;

