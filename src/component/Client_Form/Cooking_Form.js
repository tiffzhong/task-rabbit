import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Client_Form.css';
import { updateDuration, updateLocationStart, updateStartDate, updateEndDate, updateVehicle, updateTaskDetails, updateClientData } from '../../ducks/clientReducer';
import Calendar from "../Calendar/Calendar";
import CalendarEnd from "../Calendar/CalenderEnd";
import Autocompletesearch from '../Googlemap/Autocompletesearch';
import axios from 'axios';

class Cooking_Form extends Component {
    constructor() {
        super();
        this.state = {
            locationToggle: false,
            durationToggle: false,
            scheduleToggle: false,

        }
    }

    handleToggle = (name, value, state) => {
        if (name === 'scheduleToggle') {
            if (this.props.startDate === '' || this.props.endDate === '') {
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
        const { locationStart, locationEnd, long, lat, duration, vehicle, startDate, endDate, taskDetails, user } = this.props;
        const bookedTask = {
            taskType: 'cooking service',
            locationStart, 
            locationEnd,
            lat,
            long, 
            duration,
            vehicle, 
            startDate, 
            endDate,
            taskDetails,
            user_id: user.auth0_id
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
                    <h1>Task: Cooking Service</h1>
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
                                <h2>How long should it take?</h2>
                                <div className='duration-container'>
                                    <div>
                                        <input type='radio' id='r1' name='radio' onClick={()=>this.props.updateDuration('Est. 1 hr')}/>
                                        <label  className='duration-radio'>Short - Est. 1 hr</label>
                                    </div>   
                                    <div>
                                        <input type='radio' id='r2' name='radio' onClick={()=>this.props.updateDuration('Est. 2-3 hrs')}/>
                                        <label  className='duration-radio'>Medium - Est. 2-3 hrs</label>
                                    </div>   
                                    <div>
                                        <input type='radio' id='r3' name='radio' onClick={()=>this.props.updateDuration('Est. 4+ hrs')}/>
                                        <label  className='duration-radio'>Long - Est. 4+ hrs</label>
                                    </div>   
                                </div>
                            </div>
                                <div className='form-button'>
                                    <button onClick={() => this.handleToggle('durationToggle', true, this.props.duration)}>Continue</button>
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
                            <div id="details-inner" className='inner-container'>
                                <p>DETAILS</p>
                                <h2>Details of Task</h2>
                                <textarea placeholder='Enter any additional details for the Tasker' className='details-input' onChange={e => this.props.updateTaskDetails(e.target.value)}></textarea>
                                <div className='form-button'>
                                    <button onClick={()=>this.bookTask()}>Book Task</button>
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
    const { user } = state.tasker
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
        taskDetails,
        user
    }
}

const mapDispatchToProps = {
    updateLocationStart: updateLocationStart,
    updateDuration: updateDuration,
    updateVehicle: updateVehicle,
    updateStartDate: updateStartDate,
    updateEndDate: updateEndDate,
    updateTaskDetails: updateTaskDetails,
    updateClientData: updateClientData
}

export default connect(mapStateToProps, mapDispatchToProps)(Cooking_Form);