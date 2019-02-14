import React, { Component } from "react";
import Calendar from "../../Calendar/Calendar";
import CalendarEnd from "../../Calendar/CalenderEnd";
import pencil from "../../Images/edit-pencil.png";
import { connect } from "react-redux";
import {
  updateDuration,
  updateLocationStart,
  updateStartDate,
  updateEndDate,
  updateVehicle,
  updateTaskDetails,
  updateClientData
} from "../../../ducks/clientReducer";
import moment from "moment";
class Schedule extends Component {
  render() {
    return (
      <div>
        {this.props.durationToggle ? (
          this.props.scheduleToggle &&
          this.props.startDate &&
          this.props.endDate ? (
            <div
              className="closed-box"
              onClick={() =>
                this.props.handleToggle(
                  "scheduleToggle",
                  false,
                  this.props.duration
                )
              }
            >
              <div className="closed-box-inner">
                <p>SCHEDULE</p>
                <div className="closedBox-img-container">
                  <img src={pencil} />
                </div>
                <h2>Schedule Your Task</h2>
                <div className="closed-schedule-box">
                  <span>
                    Start:{" "}
                    {this.props.startDate
                      ? moment(this.props.startDate).format(
                          "MMMM Do YYYY (h:mm a)"
                        )
                      : null}
                    <br />
                    End:{" "}
                    {this.props.endDate
                      ? moment(this.props.endDate).format(
                          "MMMM Do YYYY (h:mm a)"
                        )
                      : null}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="question-box">
              <div className="inner-container">
                <p>SCHEDULE</p>
                <div className="time-box">
                  <div className="calendar-box">
                    <h2>Schedule Your Task</h2>
                    <div className="small-question-box">
                      <div className="calendar">
                        <Calendar />
                      </div>
                    </div>
                  </div>
                  <div className="calendar-box">
                    <h2>Task End Date & Time</h2>
                    <div className="small-question-box">
                      <div className="calendar">
                        <CalendarEnd />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-button">
                <button
                  onClick={() =>
                    this.props.handleToggle(
                      "scheduleToggle",
                      true,
                      this.props.vehicle
                    )
                  }
                >
                  Continue
                </button>
              </div>
            </div>
          )
        ) : (
          <div className="toggle-box">
            <p>SCHEDULE</p>
          </div>
        )}
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
  const { user } = state.tasker;
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
  };
};

const mapDispatchToProps = {
  updateLocationStart: updateLocationStart,
  updateDuration: updateDuration,
  updateVehicle: updateVehicle,
  updateStartDate: updateStartDate,
  updateEndDate: updateEndDate,
  updateTaskDetails: updateTaskDetails,
  updateClientData: updateClientData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedule);
