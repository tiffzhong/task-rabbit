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
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    return (
      <nav>
        <div className="logo">
          <Link to="/">
            {" "}
            <div>Logo</div>
          </Link>
        </div>
        <div className="sidelinks">
          <Link to="/how-it-works">
            <div>How it works</div>
          </Link>
          <Link to="login">
            <div onClick={this.login}>Login</div>
          </Link>
          <Link to="/create-tasker-profile">
            <div>Become a Tasker</div>
          </Link>
        </div>
        <div className="menuButton-container">
          <div className="menuButton">
            <button onClick={this.toggler}>
              <i class="fas fa-bars" />
            </button>
          </div>
          <div className={this.state.toggle ? "showDropdown" : "hideDropdown"}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/how-it-works">How it Works</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/create-tasker-profile">Become a Tasker</Link>
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