/* 
 * DeleteButton stateless component
 * Button click can delete row or column depending on button's type
 */

import React, { Component } from 'react';

class DeleteButton extends Component {
  
  constructor(props) {
    super(props);
    this._onDelBtnClick = this._onDelBtnClick.bind(this);
  }

  _getbtnClassNames(btnType) {
    switch(btnType) {
    case 'delRow':
      return 'mytable__btn mytable__btn--del mytable__btn--del-row';
    case 'delColumn':
      return 'mytable__btn mytable__btn--del mytable__btn--del-column';
    default:
      return '';
    }
  }

  _onDelBtnClick() {
    this.props.onDeleteHandler(this.props.type, this.props.position);
  }

  _getBtnStyle(btnType) {
    let btnStyle = {};
    const btnPosition = parseInt(this.props.position, 10);
    if ('delRow' === btnType) {
      btnStyle = { top: `${52 * btnPosition}px`}
    }
    if ('delColumn' === btnType) {
      btnStyle = { left: `${52 * btnPosition}px`}
    }
    if (!this.props.isShown) {
      btnStyle = {
        ...btnStyle,        
        display: 'none',
        };
    }
    return btnStyle;
  }

  render() {    
    const btnType = this.props.type;
    return (
      <button className={this._getbtnClassNames(btnType)}
              onClick={this._onDelBtnClick}
              style={this._getBtnStyle(btnType)} >
      </button>
    );
  }

}

export default DeleteButton;
