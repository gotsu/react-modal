import React, { Component } from 'react';
import './Modal.css';


class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { visible, hide } = this.props;
    return (
      (visible) &&
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