/* 
 * DeleteButton stateless component
 * Button click can delete row or column depending on button's type
 */

import React, { Component } from 'react';

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.onDelBtnClick = this.onDelBtnClick.bind(this);
  }

  onDelBtnClick = () => {
    this.props.onDeleteHandler(this.props.type, this.props.position);
  }

  getbtnClassNames = (btnType) => {
    switch (btnType) {
      case 'delRow':
        return 'mytable__btn mytable__btn--del mytable__btn--del-row';
      case 'delColumn':
        return 'mytable__btn mytable__btn--del mytable__btn--del-column';
      default:
        return '';
    }
  }

  getBtnStyle = (btnType) => { // TODO: position should be offset from top-left parent corner
    let btnStyle = {};
    const btnPosition = parseInt(this.props.position, 10);
    if (btnType === 'delRow') {
      btnStyle = { top: `${52 * btnPosition}px` };
    }
    if (btnType === 'delColumn') {
      btnStyle = { left: `${52 * btnPosition}px` };
    }
    return (this.props.isShown ? btnStyle : { ...btnStyle, display: 'none' });
  }

  render() {
    const btnType = this.props.type;
    return (
      <button
        className={this.getbtnClassNames(btnType)}
        onClick={this.onDelBtnClick}
        style={this.getBtnStyle(btnType)}
      />
    );
  }
}

export default DeleteButton;
