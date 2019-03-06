import React, { Component } from "react";
import Autocompletesearch from "../../Googlemap/Autocompletesearch";
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

class LocationSingle extends Component {
  render() {
    return (
      <div className="first-question-box">
        {this.props.locationStart && this.props.locationToggle ? (
          <div
            className="closed-box"
            onClick={() =>
              this.props.handleToggle(
                "locationToggle",
                false,
                this.props.locationStart
              )
            }
          >
            <div className="closed-box-inner">
              <p>YOUR TASK LOCATION</p>
              <div className="closedBox-img-container">
                <img src={pencil} />
              </div>
              <h2>Your Task Start Location</h2>
              <span>{this.props.locationStart}</span>
            </div>
          </div>
        ) : (
          <div className="question-box" id="question-box">
            <div className="inner-container">
              <p>LOCATION</p>
              <h2>Your Task Location</h2>
              <Autocompletesearch />
              <div
                className={!this.props.locationToggle ? "form-button" : "hide"}
              >
                <button
                  onClick={() =>
                    this.props.handleToggle(
                      "locationToggle",
                      true,
                      this.props.locationStart
                    )
                  }
                >
                  Continue
                </button>
              </div>
            </div>
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
)(LocationSingle);
