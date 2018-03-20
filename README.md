

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

### Redux

``` javascript
import React, { Component, Fragment } from 'react';
import Modal from 'components/Modal';
import { connect } from 'react-redux';
import * as modalActions from 'store/modules/modal';

class ModalContainer extends Component {

  show = () => {
    this.props.modal_show();
  }
  hide = () => {
    this.props.modal_hide();
  }

  render() {
    const { show, hide } = this;
    const { visible } = this.props;
    return (
      <Fragment>
        <button onClick={show}>Redux Show</button>
        <Modal hide={hide} visible={visible} />
      </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
```