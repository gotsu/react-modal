import React from 'react';
import RefModal from 'components/RefModal';
import { withRouter } from 'react-router';

class RefHistory extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { location, history } = this.props;
    return (
      <div>
        <RefModal ref={i => this.modal = i } location={location} history={history} >
          Modal1
        </RefModal>
        <button onClick={() => this.modal.show()} >Click</button>
      </div>
    )
  }
}

export default withRouter(RefHistory);