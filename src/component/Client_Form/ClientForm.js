import React, { Component } from "react";
import "./Client_Form.css";
import { connect } from "react-redux";
import {
  updateDuration,
  updateLocationStart,
  updateStartDate,
  updateEndDate,
  updateVehicle,
  updateTaskDetails,
  updateClientData,
  updateTaskType,
  editTaskDetails,
  setInitialState
} from "../../ducks/clientReducer";
import { getConfirmation } from "../../ducks/taskerReducer";
import LocationDual from "./QuestionBoxes/LocationDual";
import Duration from "./QuestionBoxes/Duration";
import Vehicle from "./QuestionBoxes/Vehicle";
import Schedule from "./QuestionBoxes/Schedule";
import Details from "./QuestionBoxes/Details";
import LocationSingle from "./QuestionBoxes/LocationSingle";
import axios from "axios";
import { Link } from "react-router-dom";

class ClientForm extends Component {
  constructor() {
    super();
    this.state = {
      //   taskType: this.props.taskType || "",
      editToggle: false,
      locationToggle: false,
      durationToggle: false,
      vehicleToggle: false,
      scheduleToggle: false,
      detailToggle: false
    };
  }

  componentDidMount() {
    this.getTaskInfo();
  }

  getTaskInfo = () => {
    if (this.props.match.params.confirmation_id) {
      axios
        .get(`/api/confirmed/${this.props.match.params.confirmation_id}`)
        .then(res => {
          // console.log(res.data, "log from get task info");
          this.props.setInitialState(res.data);
          return this.props.getConfirmation(res.data);
        });
    }
  };

  handleToggle = (name, value, state) => {
    if (name === "scheduleToggle") {
      if (this.props.startDate === "" || this.props.endDate === "") {
        alert("you must answer all questions before continuing");
      } else {
        this.setState({
          [name]: value
        });
      }
    } else if (state === "") {
      alert("you must answer all questions before continuing");
    } else {
      console.log("name in handleToggle", name);
      console.log("value in handleToggle", value);
      this.setState({
        [name]: value
      });
    }
  };

  setTaskType = taskType => {
    this.props.updateTaskType(taskType);
  };

  bookTask = () => {
    const {
      taskType,
      locationStart,
      locationEnd,
      long,
      lat,
      duration,
      vehicle,
      startDate,
      endDate,
      taskDetails,
      user
    } = this.props;

    const bookedTask = {
      taskType,
      locationStart,
      locationEnd,
      lat,
      long,
      duration,
      vehicle,
      startDate,
      endDate,
      taskDetails,
      user_id: user.auth0_id
    };
    axios.post("/api/client", bookedTask).then(response => {
      console.log(response.data, "wohooo");
      this.props.updateClientData(response.data);
    });
    // this.props.updateTaskType('cooking service');
  };
  updateTask = () => {
    const {
      taskType,
      locationStart,
      locationEnd,
      long,
      lat,
      duration,
      vehicle,
      startDate,
      endDate,
      taskDetails,
      user,
      confirmation_id
    } = this.props;

    const bookedTask = {
      taskType,
      locationStart,
      locationEnd,
      lat,
      long,
      duration,
      vehicle,
      startDate,
      endDate,
      taskDetails,
      user_id: user.auth0_id
    };
    axios
      .put(`/api/client/${this.props.match.params.confirmation_id}`, bookedTask)
      .then(response => {
        console.log(response.data, "wohooo");
        this.props.updateClientData(response.data);
      });
    // this.props.updateTaskType('cooking service');
  };

  render() {
    console.log("props", this.props);
    return (
      <div className="form">
        {/* {this.state.editToggle ? <p>Client Edit</p> : <p>Client Form</p>} */}
        {this.props.taskType === "Moving & Packing" ||
        this.props.taskType === "Yardwork/Landscaping" ? (
          <div className="outer-container">
            {this.props.match.params.confirmation_id ? (
              <h1>Edit {this.props.taskType}</h1>
            ) : (
              <h1>{this.props.taskType}</h1>
            )}
            {/* <h1>{this.props.taskType}</h1> */}
            <LocationDual
              locationToggle={this.state.locationToggle}
              durationToggle={this.state.durationToggle}
              vehicleToggle={this.state.vehicleToggle}
              scheduleToggle={this.state.scheduleToggle}
              handleToggle={this.handleToggle}
              confirmedTask={this.props.confirmedTask}
            />
            <Duration
              locationToggle={this.state.locationToggle}
              durationToggle={this.state.durationToggle}
              vehicleToggle={this.state.vehicleToggle}
              scheduleToggle={this.state.scheduleToggle}
              handleToggle={this.handleToggle}
              confirmedTask={this.props.confirmedTask}
            />
            <Vehicle
              locationToggle={this.state.locationToggle}
              durationToggle={this.state.durationToggle}
              vehicleToggle={this.state.vehicleToggle}
              scheduleToggle={this.state.scheduleToggle}
              handleToggle={this.handleToggle}
              confirmedTask={this.props.confirmedTask}
            />
            <Schedule
              locationToggle={this.state.locationToggle}
              durationToggle={this.state.durationToggle}
              vehicleToggle={this.state.vehicleToggle}
              scheduleToggle={this.state.scheduleToggle}
              handleToggle={this.handleToggle}
              confirmedTask={this.props.confirmedTask}
            />
            <Details
              locationToggle={this.state.locationToggle}
              durationToggle={this.state.durationToggle}
              vehicleToggle={this.state.vehicleToggle}
              scheduleToggle={this.state.scheduleToggle}
              handleToggle={this.handleToggle}
              bookTask={this.bookTask}
              detailToggle={this.state.detailToggle}
              confirmedTask={this.props.confirmedTask}
            />
            />
          </div>
        ) : this.props.taskType === "Mounting & Installation" ? (
          <div className="outer-container">
            {this.props.match.params.confirmation_id ? (
              <h1>Edit {this.props.taskType}</h1>
            ) : (
              <h1>{this.props.taskType}</h1>
            )}
            {/* <h1>{this.props.taskType}</h1> */}
            <LocationSingle
              locationToggle={this.state.locationToggle}
              durationToggle={this.state.durationToggle}
              vehicleToggle={this.state.vehicleToggle}
              scheduleToggle={this.state.scheduleToggle}
              handleToggle={this.handleToggle}
              confirmedTask={this.props.confirmedTask}
            />
            <Duration
              locationToggle={this.state.locationToggle}
              durationToggle={this.state.durationToggle}
              vehicleToggle={this.state.vehicleToggle}
              scheduleToggle={this.state.scheduleToggle}
              handleToggle={this.handleToggle}
              confirmedTask={this.props.confirmedTask}
            />
            <Vehicle
              locationToggle={this.state.locationToggle}
              durationToggle={this.state.durationToggle}
              vehicleToggle={this.state.vehicleToggle}
              scheduleToggle={this.state.scheduleToggle}
              handleToggle={this.handleToggle}
              confirmedTask={this.props.confirmedTask}
            />
            <Schedule
              locationToggle={this.state.locationToggle}
              durationToggle={this.state.durationToggle}
              vehicleToggle={this.state.vehicleToggle}
              scheduleToggle={this.state.scheduleToggle}
              handleToggle={this.handleToggle}
              confirmedTask={this.props.confirmedTask}
            />
            <Details
              locationToggle={this.state.locationToggle}
              durationToggle={this.state.durationToggle}
              vehicleToggle={this.state.vehicleToggle}
              scheduleToggle={this.state.scheduleToggle}
              handleToggle={this.handleToggle}
              bookTask={this.bookTask}
              detailToggle={this.state.detailToggle}
              confirmedTask={this.props.confirmedTask}
            />
          </div>
        ) : this.props.taskType === "Delivery Service" ? (
          <div className="outer-container">
            {this.props.match.params.confirmation_id ? (
              <h1>Edit {this.props.taskType}</h1>
            ) : (
              <h1>{this.props.taskType}</h1>
            )}
            {/* <h1>{this.props.taskType}</h1> */}
            <LocationDual
              locationToggle={this.state.locationToggle}
              durationToggle={this.state.durationToggle}
              vehicleToggle={this.state.vehicleToggle}
              scheduleToggle={this.state.scheduleToggle}
              handleToggle={this.handleToggle}
              confirmedTask={this.props.confirmedTask}
            />
            <Duration
              locationToggle={this.state.locationToggle}
              durationToggle={this.state.durationToggle}
              vehicleToggle={this.state.vehicleToggle}
              scheduleToggle={this.state.scheduleToggle}
              handleToggle={this.handleToggle}
              confirmedTask={this.props.confirmedTask}
            />
            <Schedule
              locationToggle={this.state.locationToggle}
              durationToggle={this.state.durationToggle}
              vehicleToggle={this.state.vehicleToggle}
              scheduleToggle={this.state.scheduleToggle}
              handleToggle={this.handleToggle}
              confirmedTask={this.props.confirmedTask}
            />
            <Details
              locationToggle={this.state.locationToggle}
              durationToggle={this.state.durationToggle}
              vehicleToggle={this.state.vehicleToggle}
              scheduleToggle={this.state.scheduleToggle}
              handleToggle={this.handleToggle}
              detailToggle={this.state.detailToggle}
              bookTask={this.bookTask}
              confirmedTask={this.props.confirmedTask}
            />
          </div>
        ) : this.props.taskType === "Furniture Assembly" ||
          this.props.taskType === "Home Improvement" ||
          this.props.taskType === "Cleaning Service" ||
          this.props.taskType === "Pet Service" ||
          this.props.taskType === "Cooking Service" ? (
          <div className="outer-container">
            {this.props.match.params.confirmation_id ? (
              <h1>Edit {this.props.taskType}</h1>
            ) : (
              <h1>{this.props.taskType}</h1>
            )}
            <LocationSingle
              locationToggle={this.state.locationToggle}
              durationToggle={this.state.durationToggle}
              vehicleToggle={this.state.vehicleToggle}
              scheduleToggle={this.state.scheduleToggle}
              handleToggle={this.handleToggle}
              confirmedTask={this.props.confirmedTask}
            />
            <Duration
              locationToggle={this.state.locationToggle}
              durationToggle={this.state.durationToggle}
              vehicleToggle={this.state.vehicleToggle}
              scheduleToggle={this.state.scheduleToggle}
              handleToggle={this.handleToggle}
              confirmedTask={this.props.confirmedTask}
            />
            <Schedule
              locationToggle={this.state.locationToggle}
              durationToggle={this.state.durationToggle}
              vehicleToggle={this.state.vehicleToggle}
              scheduleToggle={this.state.scheduleToggle}
              handleToggle={this.handleToggle}
              confirmedTask={this.props.confirmedTask}
            />
            <Details
              locationToggle={this.state.locationToggle}
              durationToggle={this.state.durationToggle}
              vehicleToggle={this.state.vehicleToggle}
              scheduleToggle={this.state.scheduleToggle}
              handleToggle={this.handleToggle}
              bookTask={this.bookTask}
              detailToggle={this.state.detailToggle}
              confirmedTask={this.props.confirmedTask}
            />
          </div>
        ) : (
          <div className="you-must-select">
            <h1>You Must Select a Task</h1>
            <div className="outer-container">
              {this.props.match.params.confirmation_id ? (
                <h1>Edit {this.props.taskType}</h1>
              ) : (
                <h1>{this.props.taskType}</h1>
              )}
              <LocationSingle
                locationToggle={this.state.locationToggle}
                durationToggle={this.state.durationToggle}
                vehicleToggle={this.state.vehicleToggle}
                scheduleToggle={this.state.scheduleToggle}
                handleToggle={this.handleToggle}
                confirmedTask={this.props.confirmedTask}
              />
              <Duration
                locationToggle={this.state.locationToggle}
                durationToggle={this.state.durationToggle}
                vehicleToggle={this.state.vehicleToggle}
                scheduleToggle={this.state.scheduleToggle}
                handleToggle={this.handleToggle}
                confirmedTask={this.props.confirmedTask}
              />
              <Schedule
                locationToggle={this.state.locationToggle}
                durationToggle={this.state.durationToggle}
                vehicleToggle={this.state.vehicleToggle}
                scheduleToggle={this.state.scheduleToggle}
                handleToggle={this.handleToggle}
                confirmedTask={this.props.confirmedTask}
              />
              <Details
                locationToggle={this.state.locationToggle}
                durationToggle={this.state.durationToggle}
                vehicleToggle={this.state.vehicleToggle}
                scheduleToggle={this.state.scheduleToggle}
                handleToggle={this.handleToggle}
                bookTask={this.bookTask}
                detailToggle={this.state.detailToggle}
                confirmedTask={this.props.confirmedTask}
              />
            </div>
          </div>
        )}
        <div className="form-button">
          {this.props.match.params.confirmation_id ? (
            <Link
              to={`/confirmation/${this.props.match.params.confirmation_id}`}
            >
              <button onClick={() => this.updateTask()}>Edit</button>
            </Link>
          ) : (
            <Link to={`/pick-a-tasker`}>
              <button onClick={() => this.bookTask()}>Book Task</button>
            </Link>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    task,
    taskType,
    locationStart,
    locationEnd,
    lat,
    long,
    duration,
    vehicle,
    startDate,
    endDate,
    taskDetails
  } = state.client;
  const { user, confirmedTask } = state.tasker;
  return {
    task,
    taskType,
    locationStart,
    locationEnd,
    lat,
    long,
    duration,
    vehicle,
    startDate,
    endDate,
    taskDetails,
    user,
    confirmedTask
  };
};

const mapDispatchToProps = {
  updateLocationStart: updateLocationStart,
  updateDuration: updateDuration,
  updateVehicle: updateVehicle,
  updateStartDate: updateStartDate,
  updateEndDate: updateEndDate,
  updateTaskDetails: updateTaskDetails,
  updateClientData: updateClientData,
  updateTaskType: updateTaskType,
  getConfirmation,
  editTaskDetails,
  setInitialState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientForm);
