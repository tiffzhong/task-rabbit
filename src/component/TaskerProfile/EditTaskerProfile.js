import React, { Component } from "react";
import { connect } from "react-redux";
import { editProfile, getProfile } from "../../ducks/taskerReducer";
import "./TaskerProfile.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { GoogleApiWrapper } from "google-maps-react";
import Autocomplete from "react-google-autocomplete";

class EditTaskerProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      place: {},
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
    if (this.props.match.params.tasker_id) {
      axios
        .get(`/api/tasker/${this.props.match.params.tasker_id}`)
        .then(res => {
          console.log(res.data);
          return this.props.getProfile(res.data);
        })
        .then(() => {
          this.setState({
            name: this.props.taskerProfile.tasker_name,
            email: this.props.taskerProfile.email,
            phone: this.props.taskerProfile.phone,
            place: this.props.taskerProfile.location,
            about: this.props.taskerProfile.about,
            mounting: this.props.taskerProfile.mounting,
            mountingHourly: this.props.taskerProfile.mountinghourly,
            delivery: this.props.taskerProfile.delivery,
            deliveryHourly: this.props.taskerProfile.deliveryhourly,
            yard: this.props.taskerProfile.yard,
            yardHourly: this.props.taskerProfile.yardhourly,
            home: this.props.taskerProfile.home,
            homeHourly: this.props.taskerProfile.homehourly,
            moving: this.props.taskerProfile.moving,
            movingHourly: this.props.taskerProfile.movinghourly,
            pet: this.props.taskerProfile.pet,
            petHourly: this.props.taskerProfile.pethourly,
            furniture: this.props.taskerProfile.furniture,
            furnitureHourly: this.props.taskerProfile.furniturehourly,
            cleaning: this.props.taskerProfile.cleaning,
            cleaningHourly: this.props.taskerProfile.cleaninghourly,
            cooking: this.props.taskerProfile.cooking,
            cookingHourly: this.props.taskerProfile.cookinghourly
          });
        })
        .catch(error => console.log("error in getProfile", error));
    }
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
    console.log(this.props.taskerProfile, "profile");
    console.log(this.state, "stater");
    const {
      tasker_name,
      email,
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
    const { user } = this.props;

    return (
      <div className="tasker-profile">
        <div className="profile-form-container">
          <form onSubmit={event => this.onSubmit(event)}>
            <h2>Your Tasker Profile</h2>
            <input
              name="name"
              value={this.state.name}
              onChange={event => this.handleInput(event)}
            />

            <input
              name="email"
              value={email}
              onChange={event => this.handleInput(event)}
            />

            <input
              name="phone"
              value={phone}
              onChange={event => this.handleInput(event)}
            />
            <div>
              <Autocomplete
                placeholder={place}
                style={{ width: "100%" }}
                onPlaceSelected={place => {
                  this.setState({
                    place: place.formatted_address
                  });
                }}
                types={["geocode"]}
              />
            </div>
            <textarea
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
                checked={mounting}
                onChange={this.handleChange}
              />
              Mounting & Installation
              <input
                name="mountingHourly"
                value={mountingHourly}
                onChange={this.handleChange}
              />
            </label>

            <label>
              <input
                type="checkbox"
                name="delivery"
                checked={delivery}
                onChange={this.handleChange}
              />
              Delivery Service
              <input
                name="deliveryHourly"
                value={deliveryHourly}
                onChange={this.handleChange}
              />
            </label>

            <label>
              <input
                type="checkbox"
                name="yard"
                checked={yard}
                onChange={this.handleChange}
              />
              Yard Work/Landscaping
              <input
                name="yardHourly"
                value={yardHourly}
                onChange={this.handleChange}
              />
            </label>

            <label>
              <input
                type="checkbox"
                name="home"
                checked={home}
                onChange={this.handleChange}
              />
              Home Improvement
              <input
                name="homeHourly"
                value={homeHourly}
                onChange={this.handleChange}
              />
            </label>

            <label>
              <input
                type="checkbox"
                name="moving"
                checked={moving}
                onChange={this.handleChange}
              />
              Moving & Packing
              <input
                name="movingHourly"
                value={movingHourly}
                onChange={this.handleChange}
              />
            </label>

            <label>
              <input
                type="checkbox"
                name="pet"
                checked={pet}
                onChange={this.handleChange}
              />
              Pet Service
              <input
                name="petHourly"
                value={petHourly}
                onChange={this.handleChange}
              />
            </label>

            <label>
              <input
                type="checkbox"
                name="furniture"
                checked={furniture}
                onChange={this.handleChange}
              />
              Furniture Assembly
              <input
                name="furnitureHourly"
                value={furnitureHourly}
                onChange={this.handleChange}
              />
            </label>

            <label>
              <input
                type="checkbox"
                name="cleaning"
                checked={cleaning}
                onChange={this.handleChange}
              />
              Cleaning Service
              <input
                name="cleaningHourly"
                value={cleaningHourly}
                onChange={this.handleChange}
              />
            </label>

            <label>
              <input
                type="checkbox"
                name="cooking"
                checked={cooking}
                onChange={this.handleChange}
              />
              Cooking Service
              <input
                name="cookingHourly"
                value={cookingHourly}
                onChange={this.handleChange}
              />
            </label>
            <Link to={`/tasker-dashboard/${user.auth0_id}`}>
              <button
                onClick={() =>
                  editProfile(
                    this.state.name,
                    email,
                    this.props.user.picture,
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
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  let { user, taskerProfile } = state.tasker;
  return { user, taskerProfile };
}

const WrappedContainer = GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP
})(EditTaskerProfile);

export default connect(
  mapStateToProps,
  { editProfile, getProfile }
)(WrappedContainer);
