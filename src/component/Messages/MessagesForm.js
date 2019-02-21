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
        console.log('confirmed task-a-roos', confirmedTasks);
        return (
            <div className='messagesForm-component'>
                    
                        {/* confirmedTasks && confirmedTasks ? */}
                        {/* <div className={ confirmedTasks ? 'messages-form-container' : 'hide'}> */}
                        <div className='messages-form-container' >
                            {   
                                this.state.confirmedTasks.length ?
                                <Messages 
                                    confirmedTasks={confirmedTasks}
                                />
                                :
                                <div className="messages">
                                    <p>YOU MUST BOOK A TASK FIRST!</p>
                                </div>
                                // :
                                // <div className="messages">
                                //     <p>Retrieving your Booked Tasks...</p>
                                // </div>
                            }
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