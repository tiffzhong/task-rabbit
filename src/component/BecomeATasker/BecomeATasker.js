import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";

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
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <>
        <h1>Create Tasker Profile</h1>
        <form onSubmit={event => this.onSubmit(event)}>
          <input
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={event => this.handleChange(event)}
          />

          <input
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={event => this.handleChange(event)}
          />

          <input
            placeholder="Phone"
            name="phone"
            value={this.state.phone}
            onChange={event => this.handleChange(event)}
          />
          <input
            placeholder="Where are you located?"
            name="location"
            value={this.state.location}
            onChange={event => this.handleChange(event)}
          />
          <input
            placeholder="Write some details about yourself"
            name="about"
            value={this.state.about}
            onChange={event => this.handleChange(event)}
          />
          <button>Register</button>
        </form>
      </>
    );
  }
}

export default BecomeATasker;
