import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Client_Form.css';
import { updateDuration, updateLocationStart, updateStartDate, updateEndDate, updateVehicle, updateTaskDetails, updateClientData } from '../../ducks/clientReducer';
import LocationSingle from './QuestionBoxes/LocationSingle';
import Duration from './QuestionBoxes/Duration';
import Schedule from './QuestionBoxes/Schedule';
import Details from './QuestionBoxes/Details';
import axios from 'axios';

class Furniture_Form extends Component {
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
            taskType: 'furniture service',
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
        this.props.reducerFunction(bookedTask.taskType)
    }

    render() {


        return (
            <div className='form'>
                <span className='shadow-box'></span>
                <div className='outer-container'>
                    <h1>Task: Furniture Service</h1>
                    <LocationSingle 
                        locationToggle={this.state.locationToggle}
                        durationToggle={this.state.durationToggle}
                        vehicleToggle={this.state.vehicleToggle}
                        scheduleToggle={this.state.scheduleToggle}
                        handleToggle={this.handleToggle}
                    />
                    <Duration 
                        locationToggle={this.state.locationToggle}
                        durationToggle={this.state.durationToggle}
                        vehicleToggle={this.state.vehicleToggle}
                        scheduleToggle={this.state.scheduleToggle}
                        handleToggle={this.handleToggle}
                    />
                    <Schedule 
                    locationToggle={this.state.locationToggle}
                    durationToggle={this.state.durationToggle}
                    vehicleToggle={this.state.vehicleToggle}
                    scheduleToggle={this.state.scheduleToggle}
                    handleToggle={this.handleToggle}
                    />
                    <Details
                        locationToggle={this.state.locationToggle}
                        durationToggle={this.state.durationToggle}
                        vehicleToggle={this.state.vehicleToggle}
                        scheduleToggle={this.state.scheduleToggle}
                        handleToggle={this.handleToggle}
                    />
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

export default connect(mapStateToProps, mapDispatchToProps)(Furniture_Form);