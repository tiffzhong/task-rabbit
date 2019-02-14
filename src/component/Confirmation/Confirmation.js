import React, { Component } from "react";
import ConfirmationMap from "./ConfirmationMap";
import "./Confirmation.css";
import Autocompletesearch from "../Googlemap/Autocompletesearch";
import axios from "axios";
import { connect } from "react-redux";
import { getConfirmation } from "../../ducks/taskerReducer";
import { Link } from "react-router-dom";
import moment from "moment";
import Stripecheckout from 'react-stripe-checkout';

class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasker: "",
      client: "",
      total: [],
      // confirmation= null
      // confirmation_id: "",
      // client_id: "",
      // confirmation_id: 0,
      // created_date: "",
      duration: "",
      // end_date: "",
      // lat: "",
      // location_end: "",
      // location_start: "",
      // long: "",
      // start_date: "",
      // task: "",
      // task_details: "",
      tasker_hourly: 0,
      // tasker_id: "",
      // vehicle: "",
      shortDuration: []
    };
  }

  componentDidMount() {
    this.propsToState();
    this.totalCost()
   
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      console.log('Hello CDU')
      this.getClient();
      this.getTasker();
      this.propsToState();
      this.totalCost()
      this.setState({duration: this.props.confirmedTask[0].duration})
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
      // duration: this.props.confirmedTask[0]
    });
  };

  totalCost = ()=>{
   
     var short = "Est. 1 hr";
     let medium = "Est. 2-3 hrs";
     let long = "Est. 4+ hrs";

    //  let shortDuration = [];
     if(this.state.duration === short ) {
       this.setState({
         shortDuration: 1
       })
      }
      //  let medDuration = if( this.state.duration === medium) {return 3 };
      //  let longDuration = if(this.state.duration === long) { return 4};
      
      
      // let amount = shortDuration * this.state.task_hourly
      console.log("State TiFF", this.state)
      console.log("statetask", this.state.task_hourly )
      //  console.log("stateduration", this.state.duration)
      //  var amount = duration * task_hourly
      // console.log("need a num", shortDuration)
      // console.log("amount", amount)
      // this.setState({
      //   total: amount
      // })
      console.log("total in state", this.state.total)
    }
    
    ontoken = (token) => {
      // const { total } = this.state
      axios.post("/api/stripe", { token}).then(response => alert("Successful payment"))
    };
    

    render() {
      console.log("sean!!", this.state.shortDuration)
      
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
<<<<<<< HEAD
            <p2>
              {location_start
                ? "Start: " + location_start
                : "Start: 101 N 1st Ave Ste 2075, Phoenix, AZ 85003"}
            </p2>
            <br />
            <p1>{location_end ? "End: " + location_end : ""}</p1>
=======
            <h6>
              <p>Start: {location_start ? location_start : "location_start"} </p>
              <p>End: {location_end ? location_end : "location_end"}</p>
            </h6>
>>>>>>> tasker_style
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
          <div className="google-maps-container"><ConfirmationMap lat={this.state.lat} lng={this.state.long}/></div>
         

          <p>You are charged only after your task is completed</p>
          <p>total:{this.state.total} </p>
          <div className="confirmation-buttons-container">
            {/* <button>Checkout With Stripe</button> */}
            {/* <button className="confirmation-submit-button"> */}
            <Stripecheckout
               ComponentClass="stripe"
               name="TaskRabbit"
               email="test@gmail.com"
              //  amount={total * 100}
               token={this.ontoken}
               allowRememberMe={false}
               stripeKey={process.env.REACT_APP_STRIPE_KEY}
            />


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
  let { clientData } = state.client;
  return {
    confirmedTask,
    clientData
  };
}
export default connect(
  mapStateToProps,
  { getConfirmation }
)(Confirmation);
