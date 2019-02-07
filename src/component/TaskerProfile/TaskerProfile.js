import React, { Component } from "react";
import { connect } from "react-redux";
import { setUser, createProfile } from "../../ducks/taskerReducer";
import "./TaskerProfile.css";
import axios from "axios";
import { Link } from "react-router-dom";
import AutocompleteSearch from "../Googlemap/Autocompletesearch";
class TaskerProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      about: "",
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
  componentDidMount() {
    axios
      .get("/auth/user-data")
      .then(response => {
        this.props.setUser(response.data.user);
      })
      .then(() => {
        this.setState({
          name: this.props.user.name,
          email: this.props.user.email
        });
      });
  }
  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
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
    console.log(this.props, "tasker props");
    console.log(this.state, "stater");
    const {
      name,
      email,
      phone,
      location,
      about,
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
    const { createProfile, user } = this.props;

    return (
      <div className="tasker-profile">
        <div className="profile-form-container">
          <h2>Tasker Profile</h2>
          <p>Your Tasker Profile</p>

          <form onSubmit={event => this.onSubmit(event)}>
            <input
              name="name"
              value={name}
              onChange={event => this.handleInput(event)}
            />

            <input
              name="email"
              value={email}
              onChange={event => this.handleInput(event)}
            />

            <input
              placeholder="Phone"
              name="phone"
              value={phone}
              onChange={event => this.handleInput(event)}
            />
            {/* <input
              placeholder="Where are you located?"
              name="location"
              value={location}
              onChange={event => this.handleInput(event)}
            /> */}
            <AutocompleteSearch />
            <textarea
              placeholder="Write some details about yourself"
              name="about"
              value={about}
              onChange={event => this.handleInput(event)}
            />
            <button>Continue</button>
          </form>
        </div>

        <div className="tasker-skill-form">
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
            <Link to="/tasker-dashboard">
              <button
                onClick={() =>
                  createProfile(
                    name,
                    email,
                    phone,

                    about,
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
                    user.auth0_id
                  )
                }
              >
                Submit
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  let { user, place } = state.tasker;
  return { user, place };
}
export default connect(
  mapStateToProps,
  { setUser, createProfile }
)(TaskerProfile);
