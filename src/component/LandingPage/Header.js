import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import { connect } from "react-redux";
import { updateTaskType } from "../../ducks/clientReducer";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }
  setTaskType = task => {
    this.props.updateTaskType(task);
  };

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

  render() {
    return (
      <header>
        <div className="header-main-text">
          <h1>
            The convenient & affordable way to get things done around the home
          </h1>
          <p>
            Choose from over 140,000 vetted Taskers for help without breaking the
            bank.
          </p>
        </div>
        <div className="header-links">
          <span>
            {
              this.props.user
              ?
              <Link to="/clientForm">
                <button
                  onClick={() =>
                    this.setTaskType({
                      taskType:"Mounting & Installation",
                      task: 'mounting'
                    })
                  }
                >
                  Mounting & Installation
                </button>
              </Link>
              :
              <Link to='/' ><button onClick={this.login} >Mounting & Installation</button></Link>
            }
            {
              this.props.user
              ?
              <Link to="/clientForm">
                <button
                  onClick={() =>
                    this.setTaskType({
                      taskType:"Delivery Service",
                      task: 'delivery'
                    })
                  }
                >
                  Delivery Service
                </button>
              </Link>
              :
              <Link to='/' ><button onClick={this.login}  >Delivery Service</button></Link>
            }
            {
              this.props.user
              ?
              <Link to="/clientForm">
                <button
                  onClick={() =>
                    this.setTaskType({
                      taskType:"Yardwork/Landscaping",
                      task: 'yard'
                    })
                  }
                >
                  Yardwork/Landscaping
                </button>
              </Link>
              :
              <Link to='/' ><button onClick={this.login}  >Yardwork/Landscaping</button></Link>
            }
            {
              this.props.user
              ?
              <Link to="/clientForm">
                <button
                  onClick={() =>
                    this.setTaskType({
                      taskType:"Home Improvement",
                      task: 'home'
                    })
                  }
                >
                  Home Improvement
                </button>
              </Link>
              :
              <Link to='/' ><button onClick={this.login}  >Home Improvement</button></Link>
            }
            {
              this.props.user
              ?
              <Link to="/clientForm">
                <button
                  onClick={() =>
                    this.setTaskType({
                      taskType:"Moving & Packing",
                      task: 'moving'
                    })
                  }
                >
                  Moving & Packing
                </button>
              </Link>
              :
              <Link to='/' ><button onClick={this.login}  >Moving & Packing</button></Link>
            }
            {
              this.props.user
              ?
              <Link to="/clientForm">
                <button
                  onClick={() =>
                    this.setTaskType({
                      taskType:"Pet Service",
                      task: 'pet'
                    })
                  }
                >
                  Pet Service
                </button>
              </Link>
              :
              <Link to='/' ><button  onClick={this.login} >Pet Service</button></Link>
            }
            {
              this.props.user
              ?
              <Link to="/clientForm">
                <button
                  onClick={() =>
                    this.setTaskType({
                      taskType:"Furniture Assembly",
                      task: 'furniture'
                    })
                  }
                >
                  Furniture Assembly
                </button>
              </Link>
              :
              <Link to='/' ><button  onClick={this.login} >Furniture Assembly</button></Link>
            }
            {
              this.props.user
              ?
              <Link to="/clientForm">
                <button
                  onClick={() =>
                    this.setTaskType({
                      taskType:"Cleaning Service",
                      task: 'cleaning'
                    })
                  }
                >
                  Cleaning Service
                </button>
              </Link>
              :
              <Link to='/' ><button  onClick={this.login} >Cleaning Service</button></Link>
            }
            {
              this.props.user
              ?
              <Link to="/clientForm">
                <button
                  onClick={() =>
                    this.setTaskType({
                      taskType:"Cooking Service",
                      task: 'cooking'
                    })
                  }
                >
                  Cooking Service
                </button>
              </Link>
              :
              <Link to='/' ><button  onClick={this.login} >Cooking Service</button></Link>
            }
          </span>
        </div>
      </header>
    );
  }
};

const mapStateToProps = state => {
  const { user } = state.tasker;
  return {
    user
  }
};



export default connect(
  mapStateToProps,
  {updateTaskType}
)(Header);
