import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../ducks/taskerReducer";
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
      about: ""
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

  submitInfo = (tasker_id, name, email, phone, location, about) => {
    axios.post("/api/tasker", {
      tasker_id,
      name,
      email,
      phone,
      location,
      about
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
    const { tasker_id, name, email, phone, location, about } = this.state;
    return (
      <div className="become-tasker-page">
        <div className="become-tasker-container">
          <h2>Become a Tasker</h2>
          <p>Create an account to get started</p>

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
            <Link to="/expertise">
              <button
                onClick={() =>
                  this.submitInfo(name, email, phone, location, about)
                }
              >
                Start Registration
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  let { user } = state;
  return { user };
}
export default connect(
  mapStateToProps,
  { setUser }
)(BecomeATasker);
