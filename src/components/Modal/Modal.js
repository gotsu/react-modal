import React, { Component } from 'react';
import './Modal.css';


class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isShow, hide } = this.props;
    return (

      isShow &&
      (
        <div className="overlay" onClick={hide}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            Modal
          </div>
        </div>
      )
    )
  }
}
export default Modal;