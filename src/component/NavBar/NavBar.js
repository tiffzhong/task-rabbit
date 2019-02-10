import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../ducks/taskerReducer";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      toggle: false,
      toggleLinks: false
    };
  }

  componentDidMount() {
    axios.get("/auth/user-data").then(response => {
      this.props.setUser(response.data.user);
    });
  }

  login() {
    const redirectUri = encodeURIComponent(
      window.location.origin + "/auth/callback"
    );
    window.location = `https://${
      process.env.REACT_APP_AUTH0_DOMAIN
    }/authorize/?client_id=${
      process.env.REACT_APP_AUTH0_CLIENT_ID
    }&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
  }

  logout = () => {
    axios.post("/auth/logout").then(() => {
      this.props.setUser(null);
      console.log("logging out");
    });
  };
  redirectToLandingPage() {
    window.location.pathname = "/";
  }

  toggler = () => {
    console.log("toggle", this.state.toggle);
    this.setState({
      toggle: !this.state.toggle
    });
  };

  linkToggler = () => {
    console.log("toggle", this.state.toggleLinks);
    this.setState({
      toggleLinks: !this.state.toggleLinks
    });
  };

  render() {
    const { user } = this.props;

    return (
      <nav>
        <div className="navBar">
          <div className="logo">
            <Link to="/">
              <img src="https://assets.taskrabbit.com/v3/assets/web/logos/logo-h-b1502abe9deb95e9b28f6125aeee018f.svg" />
            </Link>
          </div>

          <div className="sidelinks">
            <div className="nav-links">
              <div className="nav-popover-container">
                <a className="services-link" onClick={this.linkToggler}>
                  Services
                </a>
                <ul
                  id="nav-popover-dropdown"
                  className={
                    this.state.toggleLinks ? "showDropdown" : "hideDropdown"
                  }
                >
                  <div className="dropdown-links">
                    <p className="dropdown-title">Task Services</p>
                    <Link
                      to="/cleaning_form"
                      className="nav-popover-link"
                      onClick={this.linkToggler}
                    >
                      Cleaning Service
                    </Link>
                    <Link
                      to="/cooking_form"
                      className="nav-popover-link"
                      onClick={this.linkToggler}
                    >
                      Cooking Service
                    </Link>
                    <Link
                      to="/delivery_form"
                      className="nav-popover-link"
                      onClick={this.linkToggler}
                    >
                      Delivery Service
                    </Link>
                    <Link
                      to="/furniture_form"
                      className="nav-popover-link"
                      onClick={this.linkToggler}
                    >
                      Furniture Assembly
                    </Link>
                    <Link
                      to="/home_form"
                      className="nav-popover-link"
                      onClick={this.linkToggler}
                    >
                      Home Improvement
                    </Link>
                    <Link
                      to="/mounting_form"
                      className="nav-popover-link"
                      onClick={this.linkToggler}
                    >
                      Mounting & Installation
                    </Link>
                    <Link
                      to="/moving_form"
                      className="nav-popover-link"
                      onClick={this.linkToggler}
                    >
                      Moving & Packing
                    </Link>
                    <Link
                      to="/pet_form"
                      className="nav-popover-link"
                      onClick={this.linkToggler}
                    >
                      Pet Service
                    </Link>
                    <Link
                      to="/yardwork_form"
                      className="nav-popover-link"
                      onClick={this.linkToggler}
                    >
                      Yardwork/Landscaping
                    </Link>
                  </div>
                </ul>
              </div>
              <Link to="/how-it-works">How it works</Link>
              <Link to="/tasker-profile">Become a Tasker</Link>
            </div>
            <button className={user ? "hide" : "login"} onClick={this.login}>
              Log in
            </button>
            <button className={user ? "login" : "hide"} onClick={this.logout}>
              Log out
            </button>
            {/* {user ? user.name : 'Please Log in!'} */}
          </div>

          <div className="menuButton-container">
            {/* <button onClick={this.toggler} class='fas fa-bars'></button> */}
            <button className="menuButton" onClick={this.toggler}>
              ☰
            </button>
            <ul
              id="menuBox"
              className={this.state.toggle ? "showDropdown" : "hideDropdown"}
            >
              <Link to="/">Home</Link>
              <Link to="/how-it-works">How it Works</Link>
              <a onClick={() => this.login()}>Register/Login</a>
              <Link to="/tasker-profile">Become a Tasker</Link>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  let { user } = state;
  return {
    user
  };
}

export default connect(
  mapStateToProps,
  { setUser }
)(NavBar);
