import React, { Component } from 'react';

import Modal from 'components/Modal';
import ModalContainer from 'containers/ModalContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      visible: false
    }
    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
  }
  show(){
    this.setState({
      visible: true
    })
  }
  hide(){
    this.setState({
      visible: false
    })
  }
  render() {
    const { visible } = this.state
    return (
      <div className="App">
        <button className="btn" onClick={this.show}>Open Modal </button>
        <Modal hide={this.hide} visible={visible}/>
        <ModalContainer />
      </div>
    );
  }
}

export default App;
