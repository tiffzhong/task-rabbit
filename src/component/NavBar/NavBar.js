import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../ducks/taskerReducer";
import { updateTaskType } from "../../ducks/clientReducer";
import EmailModalContent from "../Emailmodal/EmailModalContent"

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      toggle: false,
      toggleLinks: false,
      display: false,
    };
  }

  componentDidMount() {
    axios.get("/auth/user-data").then(response => {
      this.props.setUser(response.data.user);
      console.log('user', response.data.user)
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
    console.log('logout user', this.props.user)
    axios.post('/auth/logout').then(() => {
      this.setState({
        user: null
      });
      console.log('logging out')
      this.props.setUser(null);
      this.redirectToLandingPage();
    });
  }

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

  setTaskType = task => {
    this.props.updateTaskType(task);
    this.linkToggler();
  };
  showModal = () => {
    this.setState({
      display: true
    })
  };
  hideModal = () => {
    this.setState({
      display: false
    })
  }

  render() {
    const { user, taskType } = this.props;
    console.log('user after render', user);
    console.log("taskType", this.props.taskType);
    return (
      <nav>
        <div className="navBar">
          <div className="logo">
            <Link to="/">
              <img src="https://assets.taskrabbit.com/v3/assets/web/logos/logo-h-b1502abe9deb95e9b28f6125aeee018f.svg" />
            </Link>
          </div>

          <div className="sidelinks">
            <Link to='/messages' >Messages</Link>

            {this.state.display ? (
              <EmailModalContent
                display={this.state.display}
                onHide={this.hideModal}
              />
            ) : null}


            <button onClick={this.showModal}>Get $10!</button>



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
                    {/* <p className="dropdown-title">Task Services</p> */}
                    {
                      this.props.user
                        ?
                        <Link
                          to="/clientForm"
                          className="nav-popover-link"
                          onClick={() =>
                            this.setTaskType({
                              taskType: "Cleaning Service",
                              task: "cleaning"
                            })
                          }
                        >
                          Cleaning Service
                      </Link>
                        :
                        <Link className="nav-popover-link" to='/' onClick={this.login} >Cleaning Service</Link>
                    }
                    {
                      this.props.user
                        ?
                        <Link
                          to="/clientForm"
                          className="nav-popover-link"
                          onClick={() =>
                            this.setTaskType({
                              taskType: "Cooking Service",
                              task: "cooking"
                            })
                          }
                        >
                          Cooking Service
                      </Link>
                        :
                        <Link className="nav-popover-link" onClick={this.login} to='/' >Cooking Service</Link>
                    }
                    {
                      this.props.user
                        ?
                        <Link
                          to="/clientForm"
                          className="nav-popover-link"
                          onClick={() =>
                            this.setTaskType({
                              taskType: "Delivery Service",
                              task: "delivery"
                            })
                          }
                        >
                          Delivery Service
                      </Link>
                        :
                        <Link className="nav-popover-link" to='/' onClick={this.login} >Delivery Service</Link>
                    }
                    {
                      this.props.user
                        ?
                        <Link
                          to="/clientForm"
                          className="nav-popover-link"
                          onClick={() =>
                            this.setTaskType({
                              taskType: "Furniture Assembly",
                              task: "furniture"
                            })
                          }
                        >
                          Furniture Assembly
                      </Link>
                        :
                        <Link className="nav-popover-link" to='/' onClick={this.login}  >Furniture Assembly</Link>
                    }
                    {
                      this.props.user
                        ?
                        <Link
                          to="/clientForm"
                          className="nav-popover-link"
                          onClick={() =>
                            this.setTaskType({
                              taskType: "Home Improvement",
                              task: "home"
                            })
                          }
                        >
                          Home Improvement
                      </Link>
                        :
                        <Link className="nav-popover-link" to='/' onClick={this.login} >Home Improvement</Link>
                    }
                    {
                      this.props.user
                        ?
                        <Link
                          to="/clientForm"
                          className="nav-popover-link"
                          onClick={() =>
                            this.setTaskType({
                              taskType: "Mounting & Installation",
                              task: "mounting"
                            })
                          }
                        >
                          Mounting & Installation
                      </Link>
                        :
                        <Link className="nav-popover-link" to='/' onClick={this.login} >Mounting & Installation</Link>
                    }
                    {
                      this.props.user
                        ?
                        <Link
                          to="/clientForm"
                          className="nav-popover-link"
                          onClick={() =>
                            this.setTaskType({
                              taskType: "Moving & Packing",
                              task: "moving"
                            })
                          }
                        >
                          Moving & Packing
                      </Link>
                        :
                        <Link to='/' className="nav-popover-link" onClick={this.login} >Moving & Packing</Link>
                    }
                    {
                      this.props.user
                        ?

                        <Link
                          to="/clientForm"
                          className="nav-popover-link"
                          onClick={() =>
                            this.setTaskType({
                              taskType: "Pet Service",
                              task: "pet"
                            })
                          }
                        >
                          Pet Service
                      </Link>
                        :
                        <Link to='/' className="nav-popover-link" onClick={this.login}>Pet Service</Link>
                    }
                    {
                      this.props.user
                        ?
                        <Link
                          to="/clientForm"
                          className="nav-popover-link"
                          onClick={() =>
                            this.setTaskType({
                              taskType: "Yardwork/Landscaping",
                              task: "yard"
                            })
                          }
                        >
                          Yardwork/Landscaping
                      </Link>
                        :
                        <Link to='/' className="nav-popover-link" onClick={this.login} >Yardwork/Landscaping</Link>
                    }
                  </div>
                </ul>
              </div>
              <Link to="/how-it-works">How It Works</Link>
              <Link to="/tasker-profile">Become a Tasker</Link>
              <div className='login-container'>
                <img src={user ? user.picture : ''} />
                <button className={user ? 'hide' : 'login'} onClick={this.login}>Log in</button>
                <button className={user ? 'login' : 'hide'} onClick={this.logout}>Log out</button>
              </div>
            </div>
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
  console.log('reducer state', state)
  let { user } = state.tasker;
  const { taskType } = state.client;
  return {
    user,
    taskType
  };
}

export default connect(
  mapStateToProps,
  { setUser, updateTaskType }
)(NavBar);
