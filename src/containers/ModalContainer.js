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