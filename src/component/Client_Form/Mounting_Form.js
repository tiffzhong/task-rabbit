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
import Calendar from "../Calendar/Calendar";
import CalendarEnd from "../Calendar/CalenderEnd";
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


    handleCheckbox = (id) => {
        const uncheck = document.getElementById([id])
        if(uncheck.checked === false) {
            this.props.updateVehicle(null);
        } else if(id === 'vehicleCar'){
            this.props.updateVehicle("Car");
            var truck = document.getElementById('vehicleTruck')
                truck.checked=false;
            var Vehicle = document.getElementById('vehicleNa')
                Vehicle.checked = false;
        } else if (id === "vehicleTruck") {
            this.props.updateVehicle("Truck");
            var carVehicle = document.getElementById('vehicleCar')
                carVehicle.checked = false;
            var naVehicle = document.getElementById('vehicleNa')
                naVehicle.checked = false;
        } else if (id === 'vehicleNa') {
            this.props.updateVehicle(null)
            var vehicleTruck = document.getElementById('vehicleTruck')
                vehicleTruck.checked=false;
            var car = document.getElementById('vehicleCar')
                car.checked = false;
        }
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
