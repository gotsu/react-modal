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
        <img src="https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_582,c_limit/phonepicutres-TA.jpg" />
        <img src="http://www.thebigideatoolkit.com/wp-content/uploads/2011/07/Big-Picture.jpg" />
      </div>
    )
  }
}

export default withRouter(RefHistory);