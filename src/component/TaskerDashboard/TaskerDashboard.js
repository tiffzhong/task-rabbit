import React, { Component } from "react";
import { connect } from "react-redux";
// import { createExpertise } from "../../ducks/taskerReducer";
import "./TaskerDashboard.css";
import axios from "axios";
import { Link } from "react-router-dom";
class TaskerDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      picture: "",
      location: ""
    };
  }

  componentDidMount() {
    // this.setProfile();
  }

  setProfile = id => {
    axios.get(`/api/profile/${this.props.match.params.id}`).then(res => {
      console.log("helllerooo", res.data);
      this.setState({
        name: res.data.name,
        picture: res.data.picture,
        location: res.data.location
      });
    });
  };

  render() {
    console.log(this.props, " props for dash");
    return (
      <div className="tasker-dash">
        Tasker Dashboard
        <Link to={`/edit-tasker-profile/${this.props.match.params.tasker_id}`}>
          Edit Profile
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let { user, taskerProfile, taskerSkills } = state.tasker;
  return { user, taskerProfile, taskerSkills };
}
export default connect(
  mapStateToProps,
  {}
)(TaskerDashboard);
