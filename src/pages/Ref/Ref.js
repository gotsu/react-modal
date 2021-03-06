import React from 'react';
import RefModal from 'components/RefModal';
import { withRouter } from 'react-router';

class Ref extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log(this.modal2);
  }

  render() {
    const { location, history } = this.props;
    return (
      <div>
        <RefModal ref={i => this.modal = i } location={location} history={history} >
          Modal1
        </RefModal>
        <button onClick={() => this.modal.show()} >Click</button>

        <RefModal ref={j => this.modal2 = j } location={location} history={history} >
          <br />Modal2
        </RefModal>
        <button onClick={() => this.modal2.show()} >Click</button>
      </div>
    )
  }
}

export default withRouter(Ref);