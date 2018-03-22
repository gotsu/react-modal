

* [Implementation Status](implementation-status.md)

## Usage

    Modal.js

``` javascript
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

```

### 1. React

``` javascript
import React from 'react';
import Modal from 'components/Modal';

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

### 2. Redux

``` javascript
import React from 'react';
import Modal from 'components/Modal';
import { connect } from 'react-redux';
import * as modalActions from 'store/modules/modal';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false
    };
  }
  show = () => {
    this.props.modal_show();
  }
  hide = () => {
    this.props.modal_hide();
  }
  render() {
    return (
      <div>
        <button onClick={this.show}>Show Modal</button>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
```

### 3. History

> `App.js`

``` javascript
import React from 'react';
import Modal from 'components/Modal';
import { withRouter } from 'react-router';
class App extends React.Component {
  show = () => {
    const { location, history } = this.props;
    history.push(location.pathname, { visible: true });
  }
  hide = () => {
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
      <div>
        <button onClick={this.show}>Show Modal</button>
        <Modal hide={this.hide} visible={ location.state.visible } />
      </div>
    )
  }
}

export default withRouter(App);
```