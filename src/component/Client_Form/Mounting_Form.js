import React, { Component } from "react";
import { connect } from "react-redux";
import "./Client_Form.css";
import {
  updateDuration,
  updateLocationStart,
  updateStartDate,
  updateEndDate,
  updateVehicle,
  updateTaskDetails,
  updateClientData
} from "../../ducks/clientReducer";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Vehicle from './QuestionBoxes/Vehicle';
import LocationSingle from "./QuestionBoxes/LocationSingle";
import Duration from "./QuestionBoxes/Duration";
import Schedule from "./QuestionBoxes/Schedule";
import Details from "./QuestionBoxes/Details";

class Mounting_Form extends Component {
    constructor() {
        super();
        this.state = {
            locationToggle: false,
            durationToggle: false,
            vehicleToggle: false,
            scheduleToggle: false,
            canEdit: false,



            // taskType: this.props.taskType,
            // locationStart: this.props.locationStart,
            // locationEnd: this.props.locationEnd,
            // duration: this.props.duration,
            // vehicle: this.props.vehicle,
            // startDate: this.props.startDate,
            // endDate: this.props.endDate,
            // taskDetails: this.props.taskDetails,
        }
    }

    handleToggle = (name, value, state) => {
        if(name ==='scheduleToggle'){
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


    editToggler = () => {
        this.setState((prevState) => {

            return {
                canEdit: !prevState.canEdit
            };
        })
    }

    bookTask = () => {
        const { locationStart, locationEnd, long, lat, duration, vehicle, startDate, endDate, taskDetails, user } = this.props;
        const bookedTask = {
            taskType: 'mounting & installation',
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
        this.props.reducerfunction(bookedTask.taskType)
    }

    render() {

        console.log('state =====> ', this.state)
        console.log('props =====> ', this.props)
        
        return (
            <div className='form'>

                <span className='shadow-box'></span>
                <div className='outer-container'>
                <h1>Task: Mounting & Installation</h1>
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
                    bookTask={this.bookTask}
                />
                <Link to='/mountingEdit'><button>Edit</button></Link>

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
    updateStartDate: updateStartDate,
    updateVehicle: updateVehicle,
    updateEndDate: updateEndDate,
    updateTaskDetails: updateTaskDetails,
    updateClientData: updateClientData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mounting_Form);
