import React, { Component } from "react";
import { connect } from "react-redux";
import { createExpertise } from "../../ducks/taskerReducer";
import "./TaskerExpertise.css";

class TaskerExpertise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mounting: false,
      mountingHourly: null,
      delivery: false,
      deliveryHourly: null,
      yard: false,
      yardHourly: null,
      home: false,
      homeHourly: null,
      moving: false,
      movingHourly: null,
      pet: false,
      petHourly: null,
      furniture: false,
      furnitureHourly: null,
      cleaning: false,
      cleaningHourly: null,
      cooking: false,
      cookingHourly: null
    };
  }
  handleChange = event => {
    const target = event.target;
    const value = target.type !== "checkbox" ? target.value : target.checked;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  onSubmit(event) {
    event.preventDefault();
  }
  render() {
    console.log(this.props, "props");
    console.log("state", this.state);
    const {
      mounting,
      mountingHourly,
      delivery,
      deliveryHourly,
      yard,
      yardHourly,
      home,
      homeHourly,
      moving,
      movingHourly,
      pet,
      petHourly,
      furniture,
      furnitureHourly,
      cleaning,
      cleaningHourly,
      cooking,
      cookingHourly
    } = this.state;
    const { createExpertise, history } = this.props;
    const { tasker_profile_id } = this.props.taskerProfile;
    console.log(this.props, "props");
    return (
      <div className="tasker-expertise-window">
        <h2>What is your hourly rate?</h2>
        <form onSubmit={event => this.onSubmit(event)}>
          <label>
            <input
              type="checkbox"
              name="mounting"
              checked={this.state.mounting}
              onChange={this.handleChange}
            />
            Mounting & Installation
            <input
              name="mountingHourly"
              value={this.state.mountingHourly}
              onChange={this.handleChange}
            />
          </label>

          <label>
            <input
              type="checkbox"
              name="delivery"
              checked={this.state.delivery}
              onChange={this.handleChange}
            />
            Delivery Service
            <input
              name="deliveryHourly"
              value={this.state.deliveryHourly}
              onChange={this.handleChange}
            />
          </label>

          <label>
            <input
              type="checkbox"
              name="yard"
              checked={this.state.yard}
              onChange={this.handleChange}
            />
            Yard Work/Landscaping
            <input
              name="yardHourly"
              value={this.state.yardHourly}
              onChange={this.handleChange}
            />
          </label>

          <label>
            <input
              type="checkbox"
              name="home"
              checked={this.state.home}
              onChange={this.handleChange}
            />
            Home Improvement
            <input
              name="homeHourly"
              value={this.state.homeHourly}
              onChange={this.handleChange}
            />
          </label>

          <label>
            <input
              type="checkbox"
              name="moving"
              checked={this.state.moving}
              onChange={this.handleChange}
            />
            Moving & Packing
            <input
              name="movingHourly"
              value={this.state.movingHourly}
              onChange={this.handleChange}
            />
          </label>

          <label>
            <input
              type="checkbox"
              name="pet"
              checked={this.state.pet}
              onChange={this.handleChange}
            />
            Pet Service
            <input
              name="petHourly"
              value={this.state.petHourly}
              onChange={this.handleChange}
            />
          </label>

          <label>
            <input
              type="checkbox"
              name="furniture"
              checked={this.state.furniture}
              onChange={this.handleChange}
            />
            Furniture Assembly
            <input
              name="furnitureHourly"
              value={this.state.furnitureHourly}
              onChange={this.handleChange}
            />
          </label>

          <label>
            <input
              type="checkbox"
              name="cleaning"
              checked={this.state.cleaning}
              onChange={this.handleChange}
            />
            Cleaning Service
            <input
              name="cleaningHourly"
              value={this.state.cleaningHourly}
              onChange={this.handleChange}
            />
          </label>

          <label>
            <input
              type="checkbox"
              name="cooking"
              checked={this.state.cooking}
              onChange={this.handleChange}
            />
            Cooking Service
            <input
              name="cookingHourly"
              value={this.state.cookingHourly}
              onChange={this.handleChange}
            />
          </label>

          <button
            onClick={() => {
              createExpertise(
                tasker_profile_id,
                mounting,
                mountingHourly,
                delivery,
                deliveryHourly,
                yard,
                yardHourly,
                home,
                homeHourly,
                moving,
                movingHourly,
                pet,
                petHourly,
                furniture,
                furnitureHourly,
                cleaning,
                cleaningHourly,
                cooking,
                cookingHourly,
                history
              );
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let { user, taskerProfile, taskerSkills } = state.tasker;
  return { user, taskerProfile, taskerSkills };
}
export default connect(
  mapStateToProps,
  { createExpertise }
)(TaskerExpertise);
