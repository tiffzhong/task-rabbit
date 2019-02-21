import React, { Component } from "react";
import { connect } from "react-redux";
import { updateVehicle } from "../../../ducks/clientReducer";
import pencil from "../../Images/edit-pencil.png";

class Vehicle extends Component {
  render() {
    return (
      <div>
        {this.props.vehicle && this.props.durationToggle ? (
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
              <p>DURATION</p>
              <div className="closedBox-img-container">
                <img src={pencil} />
              </div>
              <div>
                <h2>Duration</h2>
                <span>{this.props.duration}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="question-box">
            <div className="inner-container">
              <p>VEHICLE</p>
              <h2>Vehicle Requirements</h2>
              {/* <input placeholder='Is a vehicle needed for this task? If yes, please specify a car or truck' onChange={e => this.props.updateVehicle(e.target.value)}></input> */}
              <div className="checkbox-input-container">
                {this.props.vehicle === null ? (
                  <div className="checkbox-input">
                    <input
                      type="radio"
                      name="radio"
                      id="vehicleNa"
                      defaultChecked
                      onClick={() => this.props.updateVehicle(null)}
                    />
                    <label className="duration-radio">NA</label>
                  </div>
                ) : (
                  <div className="checkbox-input">
                    <input
                      type="radio"
                      name="radio"
                      id="vehicleNa"
                      onClick={() => this.props.updateVehicle(null)}
                    />
                    <label className="duration-radio">NA</label>
                  </div>
                )}
                {this.props.vehicle === "Car" ? (
                  <div className="checkbox-input">
                    <input
                      type="radio"
                      name="radio"
                      id="vehicleCar"
                      defaultChecked
                      onClick={() => this.props.updateVehicle("Car")}
                    />
                    <label className="duration-radio">Car</label>
                  </div>
                ) : (
                  <div className="checkbox-input">
                    <input
                      type="radio"
                      name="radio"
                      id="vehicleCar"
                      onClick={() => this.props.updateVehicle("Car")}
                    />
                    <label className="duration-radio">Car</label>
                  </div>
                )}
                {this.props.vehicle === "Truck" ? (
                  <div className="checkbox-input">
                    <input
                      type="radio"
                      name="radio"
                      id="vehicleTruck"
                      defaultChecked
                      onClick={() => this.props.updateVehicle("Truck")}
                    />
                    <label className="duration-radio">Truck</label>
                  </div>
                ) : (
                  <div className="checkbox-input">
                    <input
                      type="radio"
                      name="radio"
                      id="vehicleTruck"
                      onClick={() => this.props.updateVehicle("Truck")}
                    />
                    <label className="duration-radio">Truck</label>
                  </div>
                )}
              </div>
              <div className="form-button">
                <button
                  onClick={() =>
                    this.props.handleToggle("vehicleToggle", true, this.props.vehicle)
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
  const { vehicle } = state.client;
  return {
    vehicle
  };
};

const mapDispatchToProps = {
  updateVehicle: updateVehicle
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vehicle);
