import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUser, getProfile, createProfile } from "../../ducks/taskerReducer";
import "./BecomeATasker.css";
import { Link } from "react-router-dom";

class BecomeATasker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      location: "",
      about: "",
      tasker_id: null
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
    this.setProfile();
  }

  setProfile = tasker_id => {
    axios.get(`/api/profile/${this.props.match.params.id}`).then(res => {
      console.log(res.data);
      this.setState({
        name: res.data.name,
        email: res.data.email,
        phone: res.data.phone,
        location: res.data.location,
        about: res.data.about,
        tasker_id: res.data.tasker_id
      });
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    console.log(this.props, "tasker props");
    const { name, email, phone, location, about } = this.state;
    const { createProfile, history } = this.props;
    return (
      <div className="become-tasker-page">
        <div className="become-tasker-container">
          <h2>Tasker Profile</h2>
          <p>Your Tasker Profile</p>

          <form onSubmit={event => this.onSubmit(event)}>
            <input
              name="name"
              value={name}
              onChange={event => this.handleChange(event)}
            />

            <input
              name="email"
              value={email}
              onChange={event => this.handleChange(event)}
            />

            <input
              placeholder="Phone"
              name="phone"
              value={phone}
              onChange={event => this.handleChange(event)}
            />
            <input
              placeholder="Where are you located?"
              name="location"
              value={location}
              onChange={event => this.handleChange(event)}
            />
            <textarea
              placeholder="Write some details about yourself"
              name="about"
              value={about}
              onChange={event => this.handleChange(event)}
            />

            <button
              onClick={() =>
                createProfile(name, email, phone, location, about, history)
              }
            >
              Submit
            </button>
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
export default connect(
  mapStateToProps,
  { setUser, getProfile, createProfile }
)(BecomeATasker);
