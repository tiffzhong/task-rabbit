import React, { Component } from "react";
import { connect } from "react-redux";
import pencil from "../../Images/edit-pencil.png";
import {
  updateDuration,
  updateLocationStart,
  updateStartDate,
  updateEndDate,
  updateVehicle,
  updateTaskDetails,
  updateClientData
} from "../../../ducks/clientReducer";

class Details extends Component {
  constructor() {
    super();
    this.state = {
      editToggle: false,
      detailToggle: false
    };
  }
  test = () => {
    alert("Test worked");
  };

  render() {
    return (
      <div>
        {this.props.scheduleToggle ? (
          this.props.detailToggle && this.props.taskDetails ? (
            <div
              className="closed-box"
              onClick={() =>
                this.props.handleToggle(
                  "durationToggle",
                  false,
                  this.props.duration
                )
              }
            >
              <div className="closed-box-inner">
                <p>DETAILS</p>
                <div className="closedBox-img-container">
                  <img src={pencil} />
                </div>
                <div>
                  <h2>Details of Task</h2>
                  <span>{this.props.taskDetails}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="question-box details">
              <div className="inner-container" id="details-inner">
                <p>DETAILS</p>
                <h2>Details of Task</h2>
                <textarea
                  placeholder={
                    this.props.taskDetails
                      ? this.props.taskDetails
                      : "Enter any additional details for the Tasker"
                  }
                  className="details-input"
                  onChange={e => this.props.updateTaskDetails(e.target.value)}
                  value={this.props.details}
                />
                <div className="form-button">
                  <button
                    onClick={() =>
                      this.props.handleToggle(
                        "detailToggle",
                        true,
                        this.props.taskDetails
                      )
                    }
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )
        ) : (
          <div className="toggle-box">
            <p>DETAILS</p>
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
)(Details);
