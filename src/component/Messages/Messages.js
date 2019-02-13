import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Messages extends Component {
    constructor(){
        super();
        this.state = {
        messagesList:[],
        client_id: ''
        }
    }

    componentDidMount() {
        // this.getMessages()
    }

    // giveMeThoseProps = () => {
    //     this.setState({
    //         client_id: ''
    //     })
    // }

    //  componentDidUpdate(prevProps) {
    //     if (prevProps !== this.props) {
    //       this.setState({
    //         client_id: this.props.user.auth0_id
    //       });
    //     }
        
    //   }

    

    render() {
        const messages = this.props.confirmedTasks.map(e => {
            console.log('messagesList', this.state.messagesList)
            return (
                <div>
                    <Link to={`/messages/${this.props.taskerProfile.tasker_profile_id}`} >
                        <span className='messages' >
                            <div className='messager-container'>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png' />
                                <div className='messager-info' >
                                    <p>{e.tasker_id}</p>
                                    <p>{e.created_date}</p>
                                </div>
                            </div>
                            {
                                this.props.messages
                                ?
                                <p>This is a message test dummy data</p>
                                :
                                <p>You Currently have NO messages with this Individual</p>
                            }
                            <div className='price-container' >
                                <p>Expected</p>
                                <p>$306.00</p>
                            </div>
                        </span>
                    </Link>
                </div>
            )
        })
        // console.log('what are my match params bitch',this.props.match.params)
        console.log('props in messages', this.props)
        return (
            <div className='messages-component'>
                {messages}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { user, taskerProfile, confirmedTask } = state.tasker
    return {
        taskerProfile,
        confirmedTask,
        user
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);