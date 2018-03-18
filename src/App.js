import React, { Component } from 'react';

import Modal from 'components/Modal';

class App extends Component {
  constructor(){
    super()
    this.state = {
      show: false
    }
    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
    this.toggle = this.toggle.bind(this)
  }
  show(){
    this.setState({
      show: true
    })
  }
  hide(){
    this.setState({
      show: false
    })
  }
  toggle(){
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    const { show } = this.state
    return (
      <div className="App" onClick={this.toggle}>
        <button className="btn" onToggle={this.toggle}>Open Modal </button>
        <Modal show={show} onToggle={this.toggle}/>
      </div>
    );
  }
}

export default App;
