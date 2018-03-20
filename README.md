

* [Implementation Status](implementation-status.md)

## Usage

### React

``` javascript
import React from 'react';
import Modal from 'Modal';

class App extends React.Component {
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
```

### Redux

``` javascript
import React, { Component, Fragment } from 'react';
import Modal from 'components/Modal';
import { connect } from 'react-redux';
import * as modalActions from 'store/modules/modal';

class App extends Component {
  show = () => {
    this.props.modal_show();
  }
  hide = () => {
    this.props.modal_hide();
  }
  render() {
    return (
      <div>
        <button onClick={this.show}>Redux Show</button>
        <Modal hide={this.hide} visible={this.props.visible} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  visible: state.modal.visible
});

const mapDispatchToProps = (dispatch) => ({
  modal_show: () => dispatch(modalActions.modal_show()),
  modal_hide: () => dispatch(modalActions.modal_hide())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
```