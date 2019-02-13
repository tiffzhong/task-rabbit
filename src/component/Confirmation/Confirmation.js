import React, { Component } from "react";
import ConfirmationMap from "./ConfirmationMap";
import "./Confirmation.css";
import Autocompletesearch from "../Googlemap/Autocompletesearch";
import axios from "axios";
import { connect } from "react-redux";
import { getConfirmation } from "../../ducks/taskerReducer";
import { Link } from "react-router-dom";
import moment from "moment";
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
            <img
              src={
                tasker.selfie
                  ? tasker.selfie
                  : "https://processing.org/tutorials/pixels/imgs/tint1.jpg"
              }
              alt="tasker"
            />
            <h5>
              Tasker
              <br /> {tasker.tasker_name}
            </h5>
          </div>

          <div className="confirmation-date-and-time-container">
            <label>Date & Time</label>
            <h6>
              {start_date
                ? moment(start_date).format("MMMM Do YYYY (h:mm a)")
                : ""}
              {"  "}
              {end_date
                ? moment(" - " + end_date).format("MMMM Do YYYY (h:mm a)")
                : ""}
            </h6>
          </div>

          <div className="confirmation-location-container">
            <label>Task Location</label>
            <p2>
              {location_start
                ? "Start: " + location_start
                : "Start: 101 N 1st Ave Ste 2075, Phoenix, AZ 85003"}
            </p2>
            <br />
            <p1>{location_end ? "End: " + location_end : ""}</p1>
          </div>

          <div className="confirmation-options-container">
            <label>Task Options</label>
            <p1>
              {duration
                ? "Duration: " + duration
                : "Duration: Short - Est. 1 hr"}
            </p1>
            <p2>{vehicle ? "Vehicle Needed: " + vehicle : ""}</p2>
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
