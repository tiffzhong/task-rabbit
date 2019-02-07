import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Client_Form.css';
import { updateDuration, updateLocationStart, updateStartDate, updateEndDate,  updateTaskDetails, updateClientData } from '../../ducks/clientReducer';
import Calendar from "../Calendar/Calendar";
import CalendarEnd from "../Calendar/CalenderEnd";
import Autocompletesearch from '../Googlemap/Autocompletesearch';
import axios from 'axios';

class Cleaning_Form extends Component {
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
            if (this.props.startDate == '' || this.props.endDate == '') {
                alert('you must answer all questions before continuing')
            } else {
                this.setState({
                    [name]: value
                })
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

    bookTask = () => {
        const bookedTask = {
            taskType: 'cleaning',
            locationStart: this.props.locationStart,
            locationEnd: this.props.locationEnd,
            duration: this.props.duration,
            startDate: this.props.startDate,
            endDate: this.props.endDate,
            taskDetails: this.props.taskDetails,
        }
        axios.post('/api/client', bookedTask).then(response => {
            this.props.updateClientData(response.data)
        })
    }

    render() {


        return (
            <div className='form'>

                <span className='shadow-box'></span>
                <div className='outer-container'>
                    <h1>Task: Cleaning Service</h1>
                    <div className='question-box'>
                        <p>LOCATION</p>
                        <h2>Your Task Start Location</h2>
                        <Autocompletesearch />
                        <div className='form-button'  >
                            <button onClick={() => this.handleToggle('locationToggle', true, this.props.locationStart)}>Continue</button>
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
                                <button onClick={() => this.handleToggle('scheduleToggle', true, this.props.vehicle)}>Continue</button>
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
                                <textarea placeholder='Enter any additional details for the Tasker' className='details-input' onChange={e => this.props.updateTaskDetails(e.target.value)}></textarea>
                                <div className='form-button'>
                                    <button onClick={()=>this.bookTask()} >Book Task</button>
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
    const { taskType, locationStart, locationEnd, lat, long, duration, vehicle, startDate, endDate, taskDetails } = state.client;
    return {
        taskType,
        locationStart,
        locationEnd,
        lat,
        long,
        duration,
        vehicle,
        startDate,
        endDate,
        taskDetails
    }
}

const mapDispatchToProps = {
    updateLocationStart: updateLocationStart,
    updateDuration: updateDuration,
    updateStartDate: updateStartDate,
    updateEndDate: updateEndDate,
    updateTaskDetails: updateTaskDetails,
    updateClientData: updateClientData
}

export default connect(mapStateToProps, mapDispatchToProps)(Cleaning_Form);