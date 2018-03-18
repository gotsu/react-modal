import React, { Component } from 'react';
import './Modal.css';


class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { show, onToggle } = this.props;
    return (
      show&&
        (
        <div className="overlay" onClick={onToggle}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            Modal
          </div>
        </div>
        )
    )
  }
}
export default Modal;