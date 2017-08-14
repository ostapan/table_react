/* 
 * MyTable component
 * uses rows, cells, controls
 */

import React, { Component, PropTypes } from 'react';
import TableRow from 'TableRow';
import TableCell from 'TableCell';
import DeleteControlPanel from 'DeleteControlPanel';
import AddControlPanel from 'AddControlPanel';

class MyTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDelColButton: false,
      showDelRowButton: false
    }
  }

  static propTypes = {
    cols: PropTypes.number.isRequired,
    rows: PropTypes.number.isRequired
  }

  render() {
    const rowsNum = this.props.rows;
    const colsNum = this.props.cols;
    return (
      <div className="main">
        for 
        <div className="row">
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
        </div>
        <div className="row">
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
        </div>
        <div className="row">
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
        </div>
        <div className="row">
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
        </div>
        

        <div className="delrow_panel">
          <div className="btn btn__del btn__del-row none"></div>
        </div>
        
        <div className="delcol_panel">
          <div className="btn btn__del btn__del-col none"></div>
        </div>

            <div className="btn btn__add btn__add-row"></div>
        <div className="btn btn__add btn__add-col"></div>

      </div>
    );
  }

}