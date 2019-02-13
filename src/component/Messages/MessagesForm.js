import React, { Component } from 'react';
import './Messages.css';
import { connect } from 'react-redux';
import Messages from './Messages';
import axios from 'axios';

class MessagesForm extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        // this.getMessages();
    }

    getMessages = () => {
        axios.get('/messages/api').then(response => {
            
        })
    }

    render() {
        return (
            <div className='messagesForm-component'>
                <p>Messages Component</p>
                <div className='messages-form-container'>
                    <p>Messages-form-Container</p>
                    <Messages />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesForm)