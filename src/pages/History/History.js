import React from 'react';
import Modal from 'components/Modal';
import { withRouter } from 'react-router';
class History extends React.Component {
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

export default withRouter(Normal);