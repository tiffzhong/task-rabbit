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

    // componentDidUpdate() {
    //     this.giveMeThoseProps()
    //   }

    // giveMeThoseProps = (prevProps) => {
    //     if (prevProps !== this.props) {
    //         this.setState({
    //           client_id: this.props.user.auth0_id
    //         });
    //     }
    // }

    getMessages = () => {
        axios.get(`/messages/api/${this.props.user && this.props.user.auth0_id}`).then(response => {
            console.log('id in messagesForm', this.props.user.auth0_id)
            console.log('getMessages response.data', response.data)
            this.setState({
                confirmedTasks: response.data
            })
        })
    }

    render() {
        console.log('client id ------', this.state.client_id);
        return (
            <div className='messagesForm-component'>
                <p>Messages Component</p>
                <div className='messages-form-container'>
                    <p>Messages-form-Container</p>
                    <Messages 
                        confirmedTasks={this.state.confirmedTasks}
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