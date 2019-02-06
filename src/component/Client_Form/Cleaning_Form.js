import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Client_Form.css';
import Calendar from "../Calendar/Calendar";
import CalendarEnd from "../Calendar/CalenderEnd"



class Cleaning_Form extends Component {
    constructor() {
        super();
        this.state = {

        }
    }


    render() {


        return (
            <div className='form'>

                Mounting Form
                <span className='shadow-box'></span>
                <div className='outer-container'>
                    <div className='question-box'>
                        <p>LOCATION</p>
                        <h2>Your Task Start Location</h2>
                        <input placeholder='Enter a street address'></input>
                    </div>
                    <div className='question-box'>
                        <p>DURATION</p>
                        <h2>Duration of Task</h2>
                        <input placeholder='An estimated time of how long your task should take to be completed'></input>
                    </div>
                    <div className='question-box'>
                        <p>VEHICLE</p>
                        <h2>Vehicle Requirements</h2>
                        <input placeholder='Is a vehicle needed for this task? If yes, please specify a car or truck'></input>
                    </div>
                    <div className='question-box'>
                        <p>SCHEDULE</p>
                        <div className='time-box'>
                            <div className='small-question-box'>

                                {/* <input placeholder='Enter the date to begin task' /> */}

                                <h2><div className="title">Task Start Date & Time</div><div className="title"> Task End Date & Time</div> </h2>
                                <div className="calendar"><Calendar /></div>
                                {/* <input placeholder='Enter a time to begin task' /> */}
                                <div><CalendarEnd /></div>
                            </div>
                        </div>
                    </div>
                    <div className='question-box details'>
                        <p>DETAILS</p>
                        <h2>Details of Task</h2>
                        <input placeholder='Enter any additional details for the Tasker' className='details-input'></input>
                    </div>
                    <div className='form-button'>
                        <button>Book Task</button>
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

export default connect(mapStateToProps)(Cleaning_Form);