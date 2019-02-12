import React, { Component } from 'react';
import './Client_Form.css';
import { connect } from 'react-redux';
import { updateDuration, updateLocationStart, updateStartDate, updateEndDate, updateVehicle, updateTaskDetails, updateClientData, updateTaskType } from '../../ducks/clientReducer';
import LocationDual from './QuestionBoxes/LocationDual';
import Duration from './QuestionBoxes/Duration';
import Vehicle from './QuestionBoxes/Vehicle';
import Schedule from './QuestionBoxes/Schedule';
import Details from './QuestionBoxes/Details';
import LocationSingle from './QuestionBoxes/LocationSingle';
import axios from 'axios';
import { Link } from 'react-router-dom';


class ClientForm extends Component {
    constructor() {
        super();
        this.state = {
            // taskType: this.props.taskType,
            editToggle: false,
            locationToggle: false,
            durationToggle: false,
            vehicleToggle: false,
            scheduleToggle: false,
            detailToggle: false
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
            console.log('name in handleToggle', name);
            console.log('value in handleToggle', value)
            this.setState({
                [name]: value
            })
        }
    }

    setTaskType = taskType => {
        this.props.updateTaskType(taskType)
    }

    bookTask = () => {
        const { taskType, locationStart, locationEnd, long, lat, duration, vehicle, startDate, endDate, taskDetails, user } = this.props;
        const bookedTask = {
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
            user_id: user.auth0_id
        }
        axios.post('/api/client', bookedTask).then(response => {
            this.props.updateClientData(response.data)
        })
        // this.props.updateTaskType('cooking service');
    }

    render() {
        console.log('what the HELLLLLLL',this.props.taskType)
        return (
            <div className='form'>
                {this.state.editToggle
                ?
                <p>Client Edit</p>
                :
                <p>Client Form</p>
                }
                {
                        (this.props.taskType === 'Moving & Packing' || this.props.taskType === 'Yardwork/Landscaping') 
                        ?
                        <div className='outer-container'>
                        <h1>{this.props.taskType}</h1>
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
                                detailToggle={this.state.detailToggle}
                                handleToggle={this.handleToggle}
                                bookTask={this.bookTask}
                            />
                        </div>
                        :
                        (this.props.taskType === 'Mounting & Installation')
                        ?
                        <div className='outer-container'>
                        <h1>{this.props.taskType}</h1>
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
                                detailToggle={this.state.detailToggle}
                            />
                        </div>
                        :
                        (this.props.taskType === 'Delivery Service')
                        ?
                        <div className='outer-container'>
                            <h1>{this.props.taskType}</h1>
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
                                detailToggle={this.state.detailToggle}
                                bookTask={this.bookTask}
                            />
                        </div>
                        :
                        (this.props.taskType === 'Furniture Assembly' || this.props.taskType === 'Home Improvement' || this.props.taskType === 'Cleaning Service' || this.props.taskType === 'Pet Service' || this.props.taskType === 'Cooking Service')
                        ?
                        <div className='outer-container'>
                            <h1>{this.props.taskType}</h1>
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
                                bookTask={this.bookTask}
                                detailToggle={this.state.detailToggle}
                            />
                        </div>
                        :
                        <div>
                            <h1>You Must Select a Task</h1>
                            <div className='outer-container'>
                                <h1>{this.props.taskType}</h1>
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
                                    bookTask={this.bookTask}
                                    detailToggle={this.state.detailToggle}
                                />
                            </div>
                        </div>
                    
                }
                <div className='form-button'>
                                {
                                    this.state.detailToggle ?

                                    this.state.editToggle
                                    ?
                                    <button onClick={()=>this.test()} >Edit</button>
                                    :
                                    <Link to="/pick_a_tasker"> <button onClick={() => this.bookTask()}>Book Task</button></Link>
                                    :
                                    <div></div>
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
    updateClientData: updateClientData,
    updateTaskType: updateTaskType
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientForm);