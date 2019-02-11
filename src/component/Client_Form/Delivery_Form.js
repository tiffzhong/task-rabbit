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
    updateClientData,
    allTaskerForClient,
    updateTaskType
} from "../../ducks/clientReducer";
import axios from "axios";
import LocationDual from "./QuestionBoxes/LocationDual";
import Schedule from "./QuestionBoxes/Schedule";
import Duration from "./QuestionBoxes/Duration";
import Details from "./QuestionBoxes/Details";

class Delivery_Form extends Component {
    constructor() {
        super();
        this.state = {
            locationToggle: false,
            durationToggle: false,
            vehicleToggle: false,
            scheduleToggle: false
        };
    }

    handleToggle = (name, value, state) => {
        if (name === "scheduleToggle") {
            if (this.props.startDate === "" || this.props.startTime === "") {
                alert("you must answer all questions before continuing");
            } else {
                console.log("name in state", name);
                this.setState({
                    [name]: value
                });
            }
        } else if (state === "") {
            alert("you must answer all questions before continuing");
        } else {
            console.log("name in state", name);
            this.setState({
                [name]: value
            });
        }
    };

    bookTask = () => {
        const { delivery } = this.props.taskerProfile;
        console.log("Taker!!!", this.props);
        const {
            locationStart,
            locationEnd,
            long,
            lat,
            duration,
            vehicle,
            startDate,
            endDate,
            taskDetails,
            user
        } = this.props;
        const bookedTask = {
            taskType: "delivery service",
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
        };
        axios.post("/api/client", bookedTask).then(response => {
            this.props.updateClientData(response.data);
        });
        // alert('Your Task has been created! ... Tiffany is a Lemon')
    };

    render() {
        return (
            <div className="form">
                <span className="shadow-box" />
                <div className="outer-container">
                    <h1>Task: Delivery Service</h1>
                    <LocationDual
                        locationToggle={this.state.locationToggle}
                        handleToggle={this.handleToggle}
                    />
                    <Duration
                        locationToggle={this.state.locationToggle}
                        handleToggle={this.handleToggle}
                    />
                    <Schedule
                        durationToggle={this.state.durationToggle}
                        handleToggle={this.handleToggle}
                    />
                    <Details
                        scheduleToggle={this.state.scheduleToggle}
                        handleToggle={this.handleToggle}
                        bookTask={this.bookTask}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {
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
    } = state.client;
    const { user, taskerProfile } = state.tasker;
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
        user,
        taskerProfile
    };
};

const mapDispatchToProps = {
    updateLocationStart: updateLocationStart,
    updateDuration: updateDuration,
    updateVehicle: updateVehicle,
    updateStartDate: updateStartDate,
    updateEndDate: updateEndDate,
    updateTaskDetails: updateTaskDetails,
    updateClientData: updateClientData,
    allTaskerForClient: allTaskerForClient,
    updateTaskType: updateTaskType
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Delivery_Form);
