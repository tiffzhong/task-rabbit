import React, { Component } from "react";
import "./ClientPickTasker.css";
import axios from "axios";
import { connect } from "react-redux";
import { allTaskersForClient } from "../../ducks/clientReducer";
import { confirmation } from "../../ducks/taskerReducer";

class clientPickTasker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaytaskers: []
    };
  }
  componentDidMount() {
    this.displayAllTaskers();
  }

  displayAllTaskers = () => {
    this.props.allTaskersForClient().then(response => {
      // console.log(response, "hello wurld");
      this.setState({
        displaytaskers: this.props.allTaskers
      });
    });
  };

  render() {
    const { allTaskers, clientData, task } = this.props;
    console.log("this.props=>>>>", this.props);
    console.log(allTaskers[0], "did it work");
    let results =
      allTaskers.length &&
      allTaskers[0].filter(value => {
        return value[task] === true;
      });

    let mappedResults =
      results.length &&
      results.map(tasker => {
        return (
          <div className="picked-tasker-profile-container">
            <div className="picked-tasker-profile-left">
              <img src={tasker.selfie} alt="tasker" />
              <a href="">View Profile & Reviews</a>
              <button
                onClick={() => {
                  this.props.confirmation(
                    new Date(),
                    task,
                    clientData[0].user_id,
                    tasker.tasker_id,
                    tasker[task + "hourly"],
                    clientData[0].startdate,
                    clientData[0].enddate || "",
                    clientData[0].locationstart,
                    clientData[0].locationend || "",
                    clientData[0].duration,
                    clientData[0].taskdetails,
                    clientData[0].lat,
                    clientData[0].long,
                    clientData[0].vehicle
                  );
                }}
              >
                Select & Continue
              </button>
              <p>
                You can chat with your Tasker, adjust task details, or change
                task time after booking.
              </p>
            </div>
            <div className="picked-tasker-profile-right">
              <h5>
                {tasker.tasker_name}
                {"  "}${tasker[task + "hourly"]}/hr
              </h5>
              <h3>How I can help:</h3>
              <p>{tasker.about}</p>
            </div>
          </div>
        );
      });

    return (
      <div className="picked-tasker-container">
        <h2>Pick a Tasker</h2>
        <p>
          After booking, you can chat with your Tasker, agree on an exact time,
          or go over any requirements or questions, if necessary.
        </p>
        {mappedResults}
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { allTaskers, clientData, task } = state.client;
  return {
    allTaskers,
    clientData,
    task
  };
};

const mapDispatchToProps = {
  allTaskersForClient,
  confirmation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(clientPickTasker);
