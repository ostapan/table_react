/* 
 * AddButton stateless component
 * Button click can add new row or new column depending on button's type
 */

import React, { Component } from 'react';

class AddButton extends Component {
  
  getBtnClassName = (btnType) => {
    switch (btnType) {
      case 'addRow':
        return 'mytable__btn mytable__btn--add mytable__btn--add-row';
      case 'addColumn':
        return 'mytable__btn mytable__btn--add mytable__btn--add-column';
      default:
        return '';
    }
  }

  getBtnStyle = (btnType) => {
    if (!this.props.isFancy) return {};

    switch (btnType) {
      case 'addRow':
        return { width: 'calc(100% - 6px)' };
      case 'addColumn':
        return { height: 'calc(100% - 6px)' };
      default:
        return {};
    }
  }

  render() {
    const btnType = this.props.type;
    return (
      <button
        className={this.getBtnClassName(btnType)}
        onClick={this.props.onAddHandler}
        style={this.getBtnStyle(btnType)}
      />
    );
  }
}

export default AddButton;
