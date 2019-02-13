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
      confirmation: {},
      confirmation_id: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        confirmation_id: this.props.confirmedTask[0].confirmation_id
      });
    }
  }

  render() {
    console.log(this.props, "kadsklfjs9ur");

    return (
      <div className="Confirmation-component">
        {/* {this.props.confirmedTask.length &&
          this.props.confirmedTask[0].confirmation_id} */}

        <Link to={`/messages/${this.state.confirmation_id}`}>Messages</Link>
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
