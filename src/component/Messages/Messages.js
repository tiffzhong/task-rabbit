import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

 class Messages extends Component {
     render() {
        // console.log('what are my match params bitch',this.props.match.params)
        console.log('props in messages', this.props)
        return (
            <div className='messages-component'>
                <Link to={`/messages/${this.props.tasker_id}`} ><span className='messages' >
                    <div className='messager-container'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png' />
                        <div className='messager-info' >
                            <p>Natalie P.</p>
                            <p>Date</p>
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
                </span></Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { taskerProfile, confirmedTask } = state.tasker
    return {
        taskerProfile,
        confirmedTask
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);