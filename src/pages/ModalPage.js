import React, { Component } from 'react';
import Modal from '../components/Modal'

class ModalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        };
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }
    show() {
        this.setState({
            isShow: true
        })
    }
    hide() {
        this.setState({
            isShow: false
        })
    }
    render() {
        const { isShow } = this.state;
        return (
            <div className="App">
                <button onClick={this.show}>Button</button>
                <Modal isShow={isShow} hide={this.hide} />
            </div>
        );
    }
}

export default ModalPage;
