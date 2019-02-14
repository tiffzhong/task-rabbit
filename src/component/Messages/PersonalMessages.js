import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getConfirmation } from '../../ducks/taskerReducer';

class PersonalMessages extends Component {
    constructor() {
        super();
        this.state = {
            personalMessagesList: [],
            taskerInfo: [],
            client_id: '2',
            postId: '',
            message: '',
            allTaskers: []
        }
    }

    componentDidMount() {
        this.getMessages();
        this.getAllTaskers();
        
    }

    setMessage = text => {
        this.setState({
            message: text
        })
    }

    getMessages = () => {
        const id = this.props.match.params.confirmation_id;
        console.log('id in getMessages', id)
        axios.get(`/api/personal/messages/${id}`).then(response => {
            console.log('personal messages all the way!', response.data)
            this.setState({
                personalMessagesList: response.data
            })
        })
    }

    getConfirmedTask = () => {
        // this.props.getConfirmation(id)
    }

    getAllTaskers = () => {
        
        axios.get('/api/tasker').then(response => {
            console.log('all taskers', response.data);
            this.setState({
                allTaskers: response.data
            })
        })
        // const { allTaskers } = this.state;
        // this.getTaskerProfile();
        // const thisTasker = allTaskers.filter(e => e.tasker_id )
    }

    // getTaskerProfile = () => {
    //     const id = this.props.confirmedTask[0].tasker_id;
    //     console.log('-+-+-+id', id);
    //     axios.get(`/api/tasker/${id}`).then(response => {
    //         console.log('_=_=_=_= taskerInfo', response.data)
    //         this.setState({
    //             taskerInfo: response.data
    //         })
    //     })
    // }

    createMessage = (id) => {
        const { auth0_id, name, picture } = this.props.user
        const newMessage = {
            id,
            date: new Date,
            user_id: auth0_id,
            user_name: name,
            user_image: picture,
            message: this.state.message
        }
        axios.post('/api/messages', newMessage).then(response => {
            console.log('handy dandy message maker', response.data)
            this.setState({
                personalMessagesList: response.data
            })
        })
    }
    
    render() {
        console.log('proppies', this.props)
        // console.log('message', this.state.message)
        console.log('response from creating message',this.state.personalMessagesList);
        console.log('+++++>>>>>> tasker', this.state.taskerInfo)
        const { user } = this.props;
        const { personalMessagesList, taskerInfo } = this.state;
        const { confirmation_id } = this.props.match.params
        const myMessages = personalMessagesList.map(e => {
            return (
                <div className='mapped-messages'>
                    <div className='messages-inner-container' >
                        <div className={'message-container' && e.poster_id ? e.poster_id === user.auth0_id ? 'clientMessage' : 'taskerMessage': 'gray'}>
                            <div className='textBox'>
                                <p>{e.message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className='PersonalMessages-component'>
                <div className='PersonalMessages-inner-component' >
                    <div className='messages-header'>
                        <img src={taskerInfo.selfie} />
                        <h4>{taskerInfo.tasker_name}</h4>
                    </div>
                    <div className='messages-container'>
                        {myMessages}
                    </div>
                    <div className='createMessage-container'>
                        <textarea onChange={e=>this.setMessage(e.target.value)} />
                        <button onClick={()=>this.createMessage(confirmation_id)} >Send</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { confirmedTask, user } = state.tasker
    return {
        confirmedTask,
        user
    }
}

const mapDispatchToProps = {
    getConfirmation: getConfirmation
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalMessages);