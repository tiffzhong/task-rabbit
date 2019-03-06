import React, { Component } from "react";
import "./Emailmodal.css";
import axios from "axios";

class EmailModalContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  getTenDollars = () => {
    const { email } = this.state;
    axios
      .post("/api/email", { email })
      .then(response => {})
      .catch(error => console.log("Error in EmailModal", error));
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    let displayName = this.props.display
      ? "modal display-block"
      : "modal display-none";
    return (
      <div className={displayName}>
        <div className="emailmodal-confirm">
          <div className="confirm-box">
            <h3> Help Your Friends, Get $10</h3>
            <p>
              Refer a friend to TaskRabbit. They get $10 off their first task.
              You get $10 off when they complete it.
            </p>

            <div className="input-container">
              <i class="far fa-envelope" />
              <input
                className="discount"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={event => this.handleChange(event)}
              />
            </div>

            <button
              onClick={() => {
                this.getTenDollars(this.state.email);
                this.props.onHide();
              }}
            >
              Send
            </button>
          </div>
          <div className="x-button-modal">
            <button
              onClick={() => {
                this.props.onHide();
              }}
            >
              <i class="fas fa-times" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EmailModalContent;
