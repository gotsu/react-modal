import React from 'react';
import Modal from 'components/Modal';
import { connect } from 'react-redux';
import * as modalActions from 'store/modules/modal';

class Redux extends React.Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(Redux);