import React, { Component } from "react";
import ConfirmationMap from "./ConfirmationMap";
import "./Confirmation.css";
import Autocompletesearch from "../Googlemap/Autocompletesearch";
import axios from "axios";

class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmation: []
    };
  }
  componentDidMount() {
    this.confirmation();
  }

  confirmation = () => {
    axios.get("/api/confirmed").then(response => {
      console.log("data", response.data);
      this.setState({
        confirmation: response.data
      });
    });
  };

  getTasker = () => {
    axios.get("/api/");
  };
  render() {
    console.log("state", this.state.confirm);

    const confirmationClientTasker = this.state.confirm.map(booked => {
      return (
        <div>
          <div>
            <img src={booked.picture} alt="userimage" key="user" />
          </div>
          <div>{booked.name}</div>
          <div>{booked.email}</div>
          <div>{booked.duration}</div>
          <div>{booked.startdate}</div>
          <div>{booked.enddate}</div>
          <div>{booked.locationstart}</div>
          <div>
            <img src={booked.selfie} alt="taskerimage" key="task" />
          </div>
          <div>{booked.tasker_name}</div>
          <div>{booked.tasktype}</div>
          <div>{booked.taskdetails}</div>

          <div>
            {booked.tasktype == "Delivery Service"
              ? booked.deliveryhourly
              : booked.tasktype === "Cleaning Service"
              ? booked.cleaninghourly
              : null}
          </div>
        </div>
      );
    });
    return <div />;
  }
}

export default Confirmation;
