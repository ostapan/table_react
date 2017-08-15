/* 
 * DeleteButton component
 * Used to render and handele Delete Button click
 */

import React, { Component, PropTypes } from 'react';

class DeleteButton extends Component {
  
  constructor(props) {
    super(props);
     this.state = {
       isVisible: this.props.isShown
     };
    this.onDelBtnClick = this.onDelBtnClick.bind(this);
    this.onDelBtnMouseOver = this.onDelBtnMouseOver.bind(this);
    this.onDelBtnMouseOut = this.onDelBtnMouseOut.bind(this);
  }

  static propTypes = {    
    btnPosition: PropTypes.number.isRequired,
    btnType: PropTypes.string.isRequired,
    onDelBtnClick: PropTypes.func.isRequired
  }

  onDelBtnClick() {
    const btnPosition = this.props.btnPosition;
    const btnType = this.props.btnType;
    this.props.onDelBtnClick(btnType, btnPosition)
  }

  onDelBtnMouseOver() {
    this.setState({
      isVisible: true
    })
  }

  onDelBtnMouseOut() {
    this.setState({
      isVisible: false
    })
  }

  render() {    
    return (
      <div  className={'DeleteButton ' + (this.state.isVisible ? 'show' : 'hide' )}
            onClick={this.onDelBtnClick}
            onMouseOver={this.onDelBtnMouseOver}
            onMouseOut={this.onDelBtnMouseOut}
            ></div>
    );
  }

}

export default DeleteButton;