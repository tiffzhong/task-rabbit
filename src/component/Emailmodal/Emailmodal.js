import React, { Component } from 'react';
import "./Emailmodal.css"
import EmailModalContent from "./EmailModalContent";


class Emailmodal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        }
    }

    showModal = () => {
        this.setState({
            display: true
        })
    }

    hideModal = () => {
        this.setState({
            display: false
        })
    }
    render() {
        return (<div>
            {this.state.display ? (
                <EmailModalContent
                    display={this.state.display}
                    onHide={this.hideModal}

                />
            )}

        </div>
        );
    }
}

export default Emailmodal;