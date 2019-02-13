import React, { Component } from "react";
import ConfirmationMap from "./ConfirmationMap";
import "./Confirmation.css";
import Autocompletesearch from "../Googlemap/Autocompletesearch";
import axios from "axios";
import { connect } from "react-redux";
import { getConfirmation } from "../../ducks/taskerReducer";
import { Link } from "react-router-dom";

class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasker: "",
      client: ""
      // confirmation= null
      // confirmation_id: "",
      // client_id: "",
      // confirmation_id: 0,
      // created_date: "",
      // duration: "",
      // end_date: "",
      // lat: "",
      // location_end: "",
      // location_start: "",
      // long: "",
      // start_date: "",
      // task: "",
      // task_details: "",
      // tasker_hourly: 0,
      // tasker_id: "",
      // vehicle: ""
    };
  }

  componentDidMount() {
    this.propsToState();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.getClient();
      this.getTasker();
      this.propsToState();
    }
  }

  getTasker = () => {
    axios
      .get(`/api/tasker/${this.props.confirmedTask[0].tasker_id}`)
      .then(response => {
        console.log(response.data, "resi-poo-tasker");
        this.setState({
          tasker: response.data
        });
      });
  };

  getClient = () => {
    axios
      .get(`/api/client/${this.props.confirmedTask[0].client_id}`)
      .then(response => {
        console.log(response.data, "resi-poo-client");
        this.setState({
          client: response.data
        });
      });
  };

  propsToState() {
    this.setState({
      ...this.props.confirmedTask[0]
    });
  }
  render() {
    console.log(this.props, "kadsklfjs9ur");
    console.log(this.state, "leh stateh");
    const taskNames = {
      pet: "Pet Services",
      mounting: "Mounting & Installation",
      delivery: "Delivery Service",
      yard: "Yardwork/Landscaping",
      home: "Home Improvement",
      moving: "Moving & Packing",
      pet: "Pet Service",
      furniture: "Furniture Assembly",
      cleaning: "Cleaning Service",
      cooking: "Cooking Service"
    };
    const {
      duration,
      end_date,
      lat,
      location_end,
      location_start,
      long,
      start_date,
      task,
      task_details,
      tasker_hourly,
      vehicle,
      tasker,
      client
    } = this.state;
    return (
      <div className="confirmation-window">
        <h2>Booking Confirmation</h2>
        <div className="confirmation-form">
          <div className="confirmation-name-container">
            <h4>{taskNames[task] ? taskNames[task] : "Mounting"}</h4>
            <h3>{tasker_hourly ? ["$" + tasker_hourly + "/hr"] : "$42/hr"}</h3>
          </div>

          <div className="confirmation-image-container">
            <section>
              <img
                src={
                  client.picture
                    ? client.picture
                    : "https://processing.org/tutorials/pixels/imgs/tint1.jpg"
                }
                alt="client"
              />
              You
              {client.name}
            </section>
            <section>
              <img
                src={
                  tasker.selfie
                    ? tasker.selfie
                    : "https://processing.org/tutorials/pixels/imgs/tint1.jpg"
                }
                alt="tasker"
              />
              Tasker
              {tasker.tasker_name}
            </section>
          </div>

          <div className="confirmation-date-and-time-container">
            <label>Date & Time</label>
            <h6>
              {start_date ? start_date : "DateStart"}
              {end_date ? end_date : "DateEnd"}
            </h6>
          </div>

          <div className="confirmation-location-container">
            <label>Task Location</label>
            <h6>
              {location_start ? location_start : "location_start"}
              {location_end ? location_end : "location_end"}
            </h6>
          </div>

          <div className="confirmation-options-container">
            <label>Task Options</label>
            <h6>{duration ? duration : "Small: 1hr"}</h6>
            <h6>{vehicle ? vehicle : "Truck"}</h6>
          </div>

          <div className="confirmation-desc-container">
            <label>Task Description</label>
            <h6>{task_details ? task_details : "Details About Task"}</h6>
          </div>
          <div className="google-maps-container">GOOGLEH MAPPEH HEREH</div>

          <p>You are charged only after your task is completed</p>
          <div className="confirmation-buttons-container">
            <button>Checkout With Stripe</button>
            <button className="confirmation-submit-button">
              Confirm & Book
            </button>
          </div>
          <Link to={`/edit-client-form/${this.state.confirmation_id}`}>
            Edit Task
          </Link>
          <Link to={`/messages/${this.state.client_id}`}>Messages</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let { confirmedTask } = state.tasker;
  return {
    confirmedTask
  };
}
export default connect(
  mapStateToProps,
  { getConfirmation }
)(Confirmation);
