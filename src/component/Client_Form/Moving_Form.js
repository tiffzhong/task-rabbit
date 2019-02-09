import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Client_Form.css';
import { updateDuration, updateLocationStart, updateStartDate, updateEndDate, updateVehicle, updateTaskDetails, updateLocationEnd, updateClientData } from '../../ducks/clientReducer';
import axios from 'axios';
import LocationDual from './QuestionBoxes/LocationDual';
import Duration from './QuestionBoxes/Duration';
import Vehicle from './QuestionBoxes/Vehicle';
import Schedule from './QuestionBoxes/Schedule';
import Details from './QuestionBoxes/Details';


class Moving_Form extends Component {
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
            if (this.props.startDate === '' || this.props.startTime === '') {
                alert('you must answer all questions before continuing')
            } else {
                this.setState({
                    [name]: value
                })
            }
        } else if (state === '') {
            alert('you must answer all questions before continuing')

        } else if ( name === 'locationToggle') {
            if (this.props.locationStart === '' || this.props.locationEnd === '') {
                alert('you must answer all questions before continuing')
            } else {
                this.setState({
                    [name]: value
                })
            }
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
            taskType: 'moving & packing',
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
                <h1>Task: Moving & Packing</h1>
                <LocationDual 
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
                <Vehicle 
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
    updateLocationEnd: updateLocationEnd,
    updateDuration: updateDuration,
    updateVehicle: updateVehicle,
    updateStartDate: updateStartDate,
    updateEndDate: updateEndDate,
    updateTaskDetails: updateTaskDetails,
    updateClientData: updateClientData
}

export default connect(mapStateToProps, mapDispatchToProps)(Moving_Form);