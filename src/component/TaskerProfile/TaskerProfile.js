import React, { Component } from "react";
import { connect } from "react-redux";
import { setUser, createProfile } from "../../ducks/taskerReducer";
import "./TaskerProfile.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { GoogleApiWrapper } from "google-maps-react";
import Autocomplete from "react-google-autocomplete";

class TaskerProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      selfie: this.props.user.picture,
      phone: "",
      place: "",
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
      selfie,
      phone,
      place,
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
          <form onSubmit={event => this.onSubmit(event)}>
            <h2>Your Tasker Profile</h2>
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
            <div>
              <Autocomplete
                style={{ width: "250%" }}
                onPlaceSelected={place => {
                  this.setState({
                    place: place.formatted_address
                  });
                }}
                types={["geocode"]}
              />
            </div>
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
          <form onSubmit={event => this.onSubmit(event)}>
            <h2>What is your hourly rate?</h2>
            <label>
              <input
                type="checkbox"
                name="mounting"
                checked={this.state.mounting}
                onChange={this.handleChange}
              />
              Mounting & Installation
              {this.state.mounting ? (
                <input
                  name="mountingHourly"
                  value={this.state.mountingHourly}
                  onChange={this.handleChange}
                />
              ) : (
                <input
                  name="mountingHourly"
                  value=""
                  onChange={this.handleChange}
                  disabled
                />
              )}
            </label>

            <label>
              <input
                type="checkbox"
                name="delivery"
                checked={this.state.delivery}
                onChange={this.handleChange}
              />
              Delivery Service
              {this.state.delivery ? (
                <input
                  name="deliveryHourly"
                  value={this.state.deliveryHourly}
                  onChange={this.handleChange}
                />
              ) : (
                <input
                  name="deliveryHourly"
                  value=""
                  onChange={this.handleChange}
                  disabled
                />
              )}
            </label>

            <label>
              <input
                type="checkbox"
                name="yard"
                checked={this.state.yard}
                onChange={this.handleChange}
              />
              Yard Work/Landscaping
              {this.state.yard ? (
                <input
                  name="yardHourly"
                  value={this.state.yardHourly}
                  onChange={this.handleChange}
                />
              ) : (
                <input
                  name="yardHourly"
                  value=""
                  onChange={this.handleChange}
                  disabled
                />
              )}
            </label>

            <label>
              <input
                type="checkbox"
                name="home"
                checked={this.state.home}
                onChange={this.handleChange}
              />
              Home Improvement
              {this.state.home ? (
                <input
                  name="homeHourly"
                  value={this.state.homeHourly}
                  onChange={this.handleChange}
                />
              ) : (
                <input
                  name="homeHourly"
                  value=""
                  onChange={this.handleChange}
                  disabled
                />
              )}
            </label>

            <label>
              <input
                type="checkbox"
                name="moving"
                checked={this.state.moving}
                onChange={this.handleChange}
              />
              Moving & Packing
              {this.state.moving ? (
                <input
                  name="movingHourly"
                  value={this.state.movingHourly}
                  onChange={this.handleChange}
                />
              ) : (
                <input
                  name="movingHourly"
                  value=""
                  onChange={this.handleChange}
                  disabled
                />
              )}
            </label>

            <label>
              <input
                type="checkbox"
                name="pet"
                checked={this.state.pet}
                onChange={this.handleChange}
              />
              Pet Service
              {this.state.pet ? (
                <input
                  name="petHourly"
                  value={this.state.petHourly}
                  onChange={this.handleChange}
                />
              ) : (
                <input
                  name="petHourly"
                  value=""
                  onChange={this.handleChange}
                  disabled
                />
              )}
            </label>

            <label>
              <input
                type="checkbox"
                name="furniture"
                checked={this.state.furniture}
                onChange={this.handleChange}
              />
              Furniture Assembly
              {this.state.furniture ? (
                <input
                  name="furnitureHourly"
                  value={this.state.furnitureHourly}
                  onChange={this.handleChange}
                />
              ) : (
                <input
                  name="furnitureHourly"
                  value=""
                  onChange={this.handleChange}
                  disabled
                />
              )}
            </label>

            <label>
              <input
                type="checkbox"
                name="cleaning"
                checked={this.state.cleaning}
                onChange={this.handleChange}
              />
              Cleaning Service
              {this.state.cleaning ? (
                <input
                  name="cleaningHourly"
                  value={this.state.cleaningHourly}
                  onChange={this.handleChange}
                />
              ) : (
                <input
                  name="cleaningHourly"
                  value=""
                  onChange={this.handleChange}
                  disabled
                />
              )}
            </label>

            <label>
              <input
                type="checkbox"
                name="cooking"
                checked={this.state.cooking}
                onChange={this.handleChange}
              />
              Cooking Service
              {this.state.cooking ? (
                <input
                  name="cookingHourly"
                  value={this.state.cookingHourly}
                  onChange={this.handleChange}
                />
              ) : (
                <input
                  name="cookingHourly"
                  value=""
                  onChange={this.handleChange}
                  disabled
                />
              )}
            </label>
            {/* <Link to={`/tasker-dashboard/${user.auth0_id}`}> */}
            <button
              onClick={() =>
                createProfile(
                  name,
                  email,
                  selfie,
                  phone,
                  place,
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
            {/* </Link> */}
          </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  let { user } = state.tasker;
  return { user };
}

const WrappedContainer = GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP
})(TaskerProfile);

export default connect(
  mapStateToProps,
  { setUser, createProfile }
)(WrappedContainer);
