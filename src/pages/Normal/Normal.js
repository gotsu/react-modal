import React from 'react';
import Modal from 'components/Modal';

class Normal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false
    };
  }
  show() {
    this.setState({
      visible: true
    });
  }
  hide() {
    this.setState({
      visible: false
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.show.bind(this)}>Show Modal</button>
        <Modal hide={this.hide.bind(this)} visible={this.state.visible}/>
      </div>
    )
  }
}

export default Normal;