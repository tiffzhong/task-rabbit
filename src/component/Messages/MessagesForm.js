import React, { Component } from 'react';
import './Messages.css';
import { connect } from 'react-redux';
import Messages from './Messages';
import axios from 'axios';

class MessagesForm extends Component {
    constructor() {
        super();
        this.state = {
            confirmedTasks: [],
            client_id: ''
        }
    }

    componentDidMount() {
        // this.giveMeThoseProps()
        this.getMessages();
    }



    getMessages = () => {
        axios.get(`/messages/${this.props.user && this.props.user.auth0_id}`).then(response => {
            console.log('id in messagesForm', this.props.user.auth0_id)
            console.log('getMessages response.data', response.data)
            this.setState({
                confirmedTasks: response.data
            })
        })
    }

    render() {
        console.log('client id ------', this.state.client_id);
        const { confirmedTasks } = this.state;
        return (
            <div className='messagesForm-component'>
                <div className={ confirmedTasks ? 'messages-form-container' : 'hide'}>
                    <Messages 
                        confirmedTasks={confirmedTasks}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { user } = state.tasker
    return {
        user
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesForm)