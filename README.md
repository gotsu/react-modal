

* [Implementation Status](implementation-status.md)

## Usage
``` javascript
import React from 'react';
import Modal from 'Modal';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false
    };
  }
  show() {
    this.setState({
      show: true
    });
  }
  hide() {
    this.setState({
      show: false
    });
  }
  toggle() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.show.bind(this)}>Show Modal</button>
        <Modal show={this.state.show} onHide={this.hide.bind(this)}>
          <div> What you want </div>
        </Modal>
      </div>
    )
  }
}
```