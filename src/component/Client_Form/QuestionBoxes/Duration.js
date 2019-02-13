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

class Duration extends Component {
  render() {
    return (
      <div>
        {this.props.locationToggle ? (
          this.props.durationToggle && this.props.duration ? (
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
                <p>DURATION</p>
                <div className="closedBox-img-container">
                  <img src={pencil} />
                </div>
                <div>
                  <h2>How Long Should it Take?</h2>
                  <span>{this.props.duration}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="question-box">
              <div className="inner-container">
                <p>DURATION</p>
                <h2>How long should it take?</h2>
                <div className="duration-container">
                  <div>
                    <input
                      type="radio"
                      id="r1"
                      name="radio"
                      onClick={() => this.props.updateDuration("Est. 1 hr")}
                    />
                    <label className="duration-radio">Short - Est. 1 hr</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="r2"
                      name="radio"
                      onClick={() => this.props.updateDuration("Est. 2-3 hrs")}
                    />
                    <label className="duration-radio">
                      Medium - Est. 2-3 hrs
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="r3"
                      name="radio"
                      onClick={() => this.props.updateDuration("Est. 4+ hrs")}
                    />
                    <label className="duration-radio">Long - Est. 4+ hrs</label>
                  </div>
                </div>
              </div>
              <div
                className={this.props.durationToggle ? "hide" : "form-button"}
              >
                <button
                  onClick={() =>
                    this.props.handleToggle(
                      "durationToggle",
                      true,
                      this.props.duration
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
            <p>DURATION</p>
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
)(Duration);
