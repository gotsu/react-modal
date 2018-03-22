import React, { Component } from 'react';
import './Modal.css';

class RefModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show() {
    const { location, history } = this.props;
    history.push(location.pathname, { visible: true });
  }
  hide() {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const { location } = this.props;
    if(location.state === undefined){
      location.state={
        visible: false
      }
    }
    return (
      (location.state.visible) &&
      (
        <div ref="modal" className="overlay" onClick={this.hide}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            RefModal
          </div>
        </div>
      )
    )
  }
}
export default RefModal;