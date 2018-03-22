import React from 'react';
import RefModal from 'components/RefModal';
class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    const { location, history } = this.props;
    return (
      <div>
        <RefModal ref="modal" location={location} history={history} />
        <button onClick={() => this.refs.modal.show()} >Click</button>
      </div>
    )
  }
}

export default Test;