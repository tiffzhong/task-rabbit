import React, { Component } from "react";
import { connect } from "react-redux";
import "./Client_Form.css";
import {
  updateDuration,
  updateLocationStart,
  updateStartDate,
  updateEndDate,
  updateVehicle,
  updateTaskDetails
} from "../../ducks/clientReducer";
import Calendar from "../Calendar/Calendar";
import CalendarEnd from "../Calendar/CalenderEnd";

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


    handleCheckbox = (id) => {
        const uncheck = document.getElementById([id])
        if(uncheck.checked === false) {
            this.props.updateVehicle(null);
        } else if(id === 'vehicleCar'){
            this.props.updateVehicle("Car");
            var truck = document.getElementById('vehicleTruck')
                truck.checked=false;
            var naVehicle = document.getElementById('vehicleNa')
                naVehicle.checked = false;
        } else if (id === "vehicleTruck") {
            this.props.updateVehicle("Truck");
            var car = document.getElementById('vehicleCar')
                car.checked = false;
            var naVehicle = document.getElementById('vehicleNa')
                naVehicle.checked = false;
        } else if (id === 'vehicleNa') {
            this.props.updateVehicle(null)
            var truck = document.getElementById('vehicleTruck')
                truck.checked=false;
            var car = document.getElementById('vehicleCar')
                car.checked = false;
        }
    }

    render() {

        console.log('state =====> ', this.state)
        console.log('props =====> ', this.props)
        
        return (
            <div className='form'>

                <span className='shadow-box'></span>
                <div className='outer-container'>
                <h1>Task: Mounting & Installation</h1>
                    <div className='question-box' >
                        <div className='inner-container'>
                            <p>LOCATION</p>
                            <h2>Your Task Start Location</h2>
                            <input placeholder='Enter a street address' onChange={e => this.props.updateLocationStart(e.target.value)} />
                            <div className='form-button'  >
                                <button className={this.state.locationToggle ? 'hide' : ''} onClick={() => this.handleToggle('locationToggle', true, this.props.locationStart)}>Continue</button>
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
                                <p>VEHICLE</p>
                                <h2>Vehicle Requirements</h2>
                                {/* <input placeholder='Is a vehicle needed for this task? If yes, please specify a car or truck' onChange={e => this.props.updateVehicle(e.target.value)}></input> */}
                                <div className='checkbox-input-container'>
                                    <div className='checkbox-input'>
                                        <input type='checkbox' name='vehicleNa'  id='vehicleNa'  defaultChecked={false} onClick={e => this.handleCheckbox(e.target.id, 'NA')} />
                                        <label>NA</label>
                                    </div>
                                    <div className='checkbox-input'>
                                        <input type='checkbox' name='vehicleCar'  id='vehicleCar'   onClick={e => this.handleCheckbox(e.target.id, 'Car')}/>
                                        <label>Car</label>
                                    </div>
                                    <div className='checkbox-input'>
                                        <input type='checkbox' name='vehicleTruck'  id='vehicleTruck'  onClick={e => this.handleCheckbox(e.target.id, 'Truck')} />
                                        <label>Truck</label>
                                    </div>
                                </div>
                                <div className='form-button'>
                                    <button onClick={() => this.handleToggle('vehicleToggle', true, this.props.vehicle)}>Continue</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='toggle-box' onClick={()=>this.handleToggle('vehicleToggle', false, this.props.vehicle)}>
                            <p>VEHICLE</p>
                        </div>
                    }
                    {this.state.vehicleToggle ?
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
    const { taskType, locationStart, duration, vehicle, startDate, endDate, taskDetails } = state.client;
    return {
        taskType,
        locationStart,
        duration,
        vehicle,
        startDate,
        endDate,
        taskDetails
    }
}

const mapDispatchToProps = {
  updateDuration: updateDuration,
  updateLocationStart: updateLocationStart,
  updateStartDate: updateStartDate,
  updateEndDate: updateEndDate,
  updateVehicle: updateVehicle,
  updateTaskDetails: updateTaskDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mounting_Form);
