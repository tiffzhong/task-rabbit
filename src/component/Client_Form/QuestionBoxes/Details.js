import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { updateDuration, updateLocationStart, updateStartDate, updateEndDate, updateVehicle, updateTaskDetails, updateClientData } from '../../../ducks/clientReducer';

class Details extends Component {
    render() {
        return (
            <div>
                {this.props.scheduleToggle ?
                    <div className='question-box details'>
                        <div className='inner-container' id='details-inner'>
                            <p>DETAILS</p>
                            <h2>Details of Task</h2>
                            <textarea placeholder='Enter any additional details for the Tasker' className='details-input' onChange={e => this.props.updateTaskDetails(e.target.value)}></textarea>
                            <div className='form-button'>
                                <Link to="pick_a_tasker"> <button onClick={() => this.props.bookTask()}>Book Task</button></Link>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='toggle-box'>
                        <p>DETAILS</p>
                    </div>
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(Details);