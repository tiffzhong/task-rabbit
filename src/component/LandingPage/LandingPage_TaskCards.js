import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import mounting from "./mounting.png";
import delivery from "./delivery.png";
import gardening from "./gardening.png";
import furniture from "./furniture.png";
import moving from "./moving.png";
import homeimprove from "./homeimprove.png";
import light from "./light.png";
import toilet from "./toilet.png";
import cleaning from "./cleaning.png";
import { connect } from 'react-redux';
import { updateTaskType } from "../../ducks/clientReducer";

class LandingPage_TaskCards extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  setTaskType = task => {
    this.props.updateTaskType(task);
  };
  
  
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };



    return (
      <div className="TaskCards-component">
        <h1>Popular Tasks In Your Area</h1>
        <Slider {...settings}>
          <div className="card">
            <div>
              <img src={mounting} alt="" />
            </div>
            <div className="card-button">
              <Link path to="/clientForm">
                <button onClick={() =>
                  this.setTaskType({
                    taskType:"Mounting & Installation",
                    task: 'mounting'
                  })
                } >Mounting & Installation</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <div>
              <img src={delivery} alt="" />
            </div>
            <div className="card-button">
              <Link path to="/clientForm">
                <button onClick={() =>
                  this.setTaskType({
                    taskType: "Delivery Service",
                    task: "delivery"
                  })
                } >Delivery Service</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <div>
              <img src={gardening} alt="" />
            </div>
            <div className="card-button">
              <Link path to="/clientForm">
                <button onClick={() =>
                  this.setTaskType({
                    taskType: "Yardwork/Landscaping",
                    task: "yard"
                  })
                }>Yardwork/Landscaping</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <div>
              <img src={homeimprove} alt="" />
            </div>
            <div className="card-button">
              <Link path to="/clientForm">
                <button onClick={() =>
                  this.setTaskType({
                    taskType: "Home Improvement",
                    task: "home"
                  })
                }>Home Improvement</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <div>
              <img src={moving} alt="" />
            </div>
            <div className="card-button">
              <Link path to="/clientForm">
                <button onClick={() =>
                  this.setTaskType({
                    taskType: "Moving & Packing",
                    task: "moving"
                  })
                }>Moving & Packing</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <div>
              <img src={toilet} alt="" />
            </div>
            <div className="card-button">
              <Link path to="/clientForm">
                <button onClick={() =>
                  this.setTaskType({
                    taskType: "Pet Service",
                    task: "pet"
                  })
                }>Pet Service</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <div>
              <img src={furniture} alt="" />
            </div>
            <div className="card-button">
              <Link path to="/clientForm">
                <button onClick={() =>
                  this.setTaskType({
                    taskType: "Furniture Assembly",
                    task: "furniture"
                  })
                }
                >Furniture Assembly</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <div>
              <img src={cleaning} alt="" />
            </div>
            <div className="card-button">
              <Link path to="/clientForm">
                <button onClick={() =>
                  this.setTaskType({
                    taskType: "Cleaning Service",
                    task: "cleaning"
                  })
                }
                >Cleaning Service</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <div>
              <img src={light} alt="" />
            </div>
            <div className="card-button">
              <Link path to="/clientForm">
                <button onClick={() =>
                  this.setTaskType({
                    taskType: "Cooking Service",
                    task: "cooking"
                  })
                }>Cooking Service</button>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = state => {

}

const mapDispatchToProps = {
  updateTaskType: updateTaskType
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage_TaskCards)