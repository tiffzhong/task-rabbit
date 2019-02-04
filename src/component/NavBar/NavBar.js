import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../ducks/reducer";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      toggle: false
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
  toggle = () => {
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      };
    });
  };

  render() {
    return (
      <nav>
        <div className="logged-in-header">
          <Link to="/dashboard">
            <img src="" width={60} mode="fit" alt="logo" />
          </Link>

          <div className="links">
            <div>
              <button onClick={this.toggle}>☰</button>
            </div>
            <ul className={this.state.toggle ? "show" : "hide"}>
              <Link to="/how-it-works">
                <li>How it works</li>
              </Link>
              <li onClick={() => this.login()}>Login</li>
              <Link to="/create-tasker-profile">
                <li>Become a Tasker</li>
              </Link>
              <li
                onClick={() => {
                  this.logout();
                  this.redirectToLandingPage();
                }}
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
)(NavBar);
