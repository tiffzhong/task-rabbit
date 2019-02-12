import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import { connect } from "react-redux";
import { updateTaskType } from "../../ducks/clientReducer";

class Header extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  setTaskType = task => {
    this.props.updateTaskType(task);
  };

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
            <Link to="/clientForm">
              <button
                onClick={() =>
                  this.setTaskType({
                    taskType: "Delivery Service",
                    task: "delivery"
                  })
                }
              >
                Delivery Service
              </button>
            </Link>
            <Link to="/clientForm">
              <button
                onClick={() =>
                  this.setTaskType({
                    taskType: "Yardwork/Landscaping",
                    task: "yard"
                  })
                }
              >
                Yardwork/Landscaping
              </button>
            </Link>

            <Link to="/clientForm">
              <button
                onClick={() =>
                  this.setTaskType({
                    taskType: "Home Improvement",
                    task: "home"
                  })
                }
              >
                Home Improvement
              </button>
            </Link>
            <Link to="/clientForm">
              <button
                onClick={() =>
                  this.setTaskType({
                    taskType: "Moving & Packing",
                    task: "moving"
                  })
                }
              >
                Moving & Packing
              </button>
            </Link>
            <Link to="/clientForm">
              <button 
                onClick={() =>
                  this.setTaskType({
                    taskType: "Pet Service",
                    task: "pet"
                  })
                }
              >
                Pet Service
              </button>
            </Link>

            <Link to="/clientForm">
              <button
                onClick={() =>
                  this.setTaskType({
                    taskType: "Furniture Assembly",
                    task: "furniture"
                  })
                }
              >
                Furniture Assembly
              </button>
            </Link>
            <Link to="/clientForm">
              <button
                onClick={() =>
                  this.setTaskType({
                    taskType: "Cleaning Service",
                    task: "cleaning"
                  })
                }
              >
                Cleaning Service
              </button>
            </Link>
            <Link to="/clientForm">
              <button
                onClick={() =>
                  this.setTaskType({
                    taskType: "Cooking Service",
                    task: "cooking"
                  })
                }
              >
                Cooking Service
              </button>
            </Link>
          </span>
        </div>
      </header>
    );
  }
};

const mapStateToProps = state => {};



export default connect(
  mapStateToProps,
  {updateTaskType}
)(Header);
