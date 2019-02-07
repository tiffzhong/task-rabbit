import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Client_Form.css';
import { updateDuration, updateLocationStart, updateStartDate, updateEndDate, updateVehicle, updateTaskDetails } from '../../ducks/clientReducer';
import Calendar from "../Calendar/Calendar";
import CalendarEnd from "../Calendar/CalenderEnd";

class Furniture_Form extends Component {
    constructor() {
        super();
        this.state = {
            locationToggle: false,
            durationToggle: false,
            vehicleToggle: false,
            scheduleToggle: false,

        }
    }

    handleToggle = (name, value, state) => {
        if (name === 'scheduleToggle') {
            if (this.props.startDate == '' || this.props.startTime == '') {
                alert('you must answer all questions before continuing')
            }
        } else if (state === '') {
            alert('you must answer all questions before continuing')

        } else {
            console.log('name in state', name);
            this.setState({
                [name]: value
            })
        }
    }

    render() {


        return (
            <div className='form'>

                <span className='shadow-box'></span>
                <div className='outer-container'>
                <h1>Task: Furniture Assembly</h1>
                    <div className='question-box'>
                        <div className='inner-container'>
                            <p>LOCATION</p>
                            <h2>Your Task Location</h2>
                            <input placeholder='Enter a street address' onChange={e => this.props.updateLocationStart(e.target.value)} />
                            <div className='form-button'  >
                                <button onClick={() => this.handleToggle('locationToggle', true, this.props.locationStart)}>Continue</button>
                            </div>
                        </div>
                    </div>
                    {this.state.locationToggle ?
                        <div className='question-box'>
                            <div className='inner-container'>
                                <p>DURATION</p>
                                <h2>Duration of Task</h2>
                                <input placeholder='An estimated time of how long your task should take to be completed' onChange={e => this.props.updateDuration(e.target.value)}></input>
                                <div className='form-button'>
                                    <button onClick={() => this.handleToggle('durationToggle', true, this.props.duration)}>Continue</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='toggle-box'>
                            <p>DURATION</p>
                        </div>
                    }
                    {this.state.durationToggle ?
                        <div className='question-box'>
                            <div className='inner-container'>
                                <p>SCHEDULE</p>
                                <div className="time-box">
                                    <div className="calendar-box">
                                        <h2>Task Start Date & Time</h2>
                                        <div className='small-question-box'>
                                            <div className="calendar"><Calendar /></div>
                                        </div>
                                    </div>
                                    <div className="calendar-box">
                                        <h2>Task End Date & Time</h2>
                                        <div className='small-question-box'>
                                            <div className="calendar"><CalendarEnd /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='form-button'>
                                <button onClick={() => this.handleToggle('vehicleToggle', true, this.props.vehicle)}>Continue</button>
                            </div>
                        </div>
                        :
                        <div className='toggle-box'>
                            <p>SCHEDULE</p>
                        </div>
                    }
                    {this.state.scheduleToggle ?
                        <div className='question-box details'>
                            <div className='inner-container'>
                                <p>DETAILS</p>
                                <h2>Details of Task</h2>
                                <input placeholder='Enter any additional details for the Tasker' className='details-input' onChange={e => this.props.updateTaskDetails(e.target.value)}></input>
                                <div className='form-button'>
                                    <button>Book Task</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='toggle-box'>
                            <p>DETAILS</p>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { taskType, locationStart, duration, startDate, startTime, taskDetails } = state.client;
    return {
        taskType,
        locationStart,
        duration,
        startDate,
        startTime,
        taskDetails
    }
}

const mapDispatchToProps = {
    updateLocationStart: updateLocationStart,
    updateDuration: updateDuration,
    updateStartDate: updateStartDate,
    updateEndDate: updateEndDate,
    updateTaskDetails: updateTaskDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(Furniture_Form);