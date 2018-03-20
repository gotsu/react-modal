import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as modalActions from 'store/modules/modal';

import Modal from 'components/Modal';
import ModalContainer from 'containers/ModalContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      visible: false
    }
    this.normalShow = this.normalShow.bind(this)
    this.normalHide = this.normalHide.bind(this)
  }
  reduxShow = () => {
    this.props.modal_show();
  }
  reduxHide = () => {
    this.props.modal_hide();
  }
  normalShow(){
    this.setState({
      visible: true
    })
  }
  normalHide(){
    this.setState({
      visible: false
    })
  }
  render() {
    const { visible } = this.state
    return (
      <div className="App">
        <button className="btn" onClick={this.normalShow}>Normal Modal</button>
        <button className="btn" onClick={this.reduxShow}>Redux Modal</button>
        <Modal normalHide={this.normalHide} reduxHide={this.reduxHide} visible={visible} reduxVisible={this.props.visible}/>
      </div>
    );
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
