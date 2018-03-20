import React, { Component } from 'react';
import './Modal.css';


class Modal extends Component {
  constructor(props) {
    super(props);
  }

  hideCombine = () => {
    this.props.normalHide();
    this.props.reduxHide();
  }

  render() {
    const { visible, normalHide, reduxHide, reduxVisible } = this.props;
    return (
      (visible || reduxVisible) &&
        (
        <div className="overlay" onClick={()=>{this.hideCombine()}}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            Modal
          </div>
        </div>
        )
    )
  }
}
export default Modal;