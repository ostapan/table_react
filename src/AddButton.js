/* 
 * AddButton component
 * Adds new row or new column depending on type
 */

import React, { Component, PropTypes } from 'react';

class AddButton extends Component {
  
  constructor(props) {
    super(props);
    this.onAddBtnClick = this.onAddBtnClick.bind(this);
  }

  onAddBtnClick() {
    const buttonType = this.props.type;
    if (buttonType === 'addRow') {
      this.props.addRowHandler();
    } else if (buttonType === 'addColumn') {
      this.props.addColumnHandler();
    }    
  }

  render() {  
    const btnClassNames = {
      addRow: 'AddRowBtn',
      addColumn: 'AddColumnBtn'
    } 
    //console.log('button className = ' + btnClassNames[this.props.type]);   
    return (

      <div  className={btnClassNames[this.props.type]} 
            onClick={this.onAddBtnClick} ></div>
    );
  }

}

export default AddButton;