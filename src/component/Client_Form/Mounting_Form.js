import React, { Component } from 'react';
import { connect } from 'react-redux';


class Mounting_Form extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    

    render() {

        // const formCompiler = (taskType) => {
        //     console.log('taskType ===>', taskType)
        //     if(taskType === null){
        //         return (
        //             <div>
        //                 test 1
        //             </div>
        //         )
        //     } else if (taskType === '') {
        //         return (
        //             <div>
        //                 test 2
        //             </div>
        //         )
        //     }
        // }
        return (
            <div className='form'>
                Mounting Form
                <span className='shadow-box'></span>
                <div className='outer-container'>
                    <div className='question-box'>
                        <h2>Your Task Start Location</h2>
                        <input></input>
                    </div>
                    <div className='question-box'>
                        <h2>Duration of Task</h2>
                        <input></input>
                    </div>
                    <div className='question-box'>
                        <h2>Vehicle Requirements</h2>
                        <input></input>
                    </div>
                    <div className='time-box'>
                        <div className='small-question-box'>
                            <h2>Task Start Date</h2>
                            <input></input>
                        </div>
                        <div className='small-question-box'>
                            <h2>Task Start Time</h2>
                            <input></input>
                        </div>
                    </div>
                    <div className='question-box'>
                        <h2>Details of Task</h2>
                        <input></input>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { taskType } = state.client;
    return {
        taskType
    }
}

export default connect(mapStateToProps)(Mounting_Form);