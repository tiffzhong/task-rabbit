import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { getConfirmation } from "../../ducks/taskerReducer";

class Messages extends Component {
  constructor() {
    super();
    this.state = {
      messagesList: [],
      client_id: ""
    };
  }

    componentDidMount() {
        this.getConfirmedTask();
    }

  getConfirmedTask = confirmation_id => {
    axios.get(`/api/confirmed/${confirmation_id}`).then(response => {
      this.props.getConfirmation(response.data);
    });
  };

  render() {
    console.log("show me my magical props", this.props);
    console.log("Its ALIVE!!!!! ====", this.state.personalMessagesList);
    const messages = this.props.confirmedTasks.map(e => {
      console.log("LINKS+++++++", e.confirmation_id);
      return (
        <div>
          <Link
            onClick={() => this.getMessages()}
            to={`/messages-personal/${e.confirmation_id && e.confirmation_id}`}
          >
            <span className="messages">
              <div className="messager-container">
                <img src={e.selfie} />
                <div className="messager-info">
                  <p>{e.tasker_name}</p>
                  <p>{e.created_date}</p>
                </div>
              </div>
              <div className="details-container">
                {this.props.messages ? (
                  <p>This is a message test dummy data</p>
                ) : (
                  <p>{e.task_details}</p>
                )}
              </div>
              {/* <div className='price-container' >
                                <p>Expected</p>
                                <p>$306.00</p>
                            </div> */}
            </span>
          </Link>
        </div>
      );
    });
    // console.log('what are my match params bitch',this.props.match.params)
    console.log("props in messages", this.props);
    return <div className="messages-component">{messages}</div>;
  }
}

const mapStateToProps = state => {
  const { user, taskerProfile, confirmedTask } = state.tasker;
  return {
    taskerProfile,
    confirmedTask,
    user
  };
};

const mapDispatchToProps = {
  getConfirmation: getConfirmation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
