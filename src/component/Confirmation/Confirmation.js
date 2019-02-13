import React, { Component } from "react";
import ConfirmationMap from "./ConfirmationMap";
import "./Confirmation.css";
import Autocompletesearch from "../Googlemap/Autocompletesearch";
import axios from "axios";
import { connect } from "react-redux";
import { getConfirmation } from "../../ducks/taskerReducer";

class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmation: {}
    };
  }
  // componentDidUpdate(prevProps) {
  //   if (
  //     prevProps.confirmedTask[0].confirmation_id !==
  //     this.props.confirmedTask[0].confirmation_id
  //   ) {
  //     axios
  //       .get(`/api/confirmed/${this.props.confirmedTask[0].confirmation_id}`)
  //       .then(response => {
  //         console.log("herroasdsafsf", response.data);
  //         this.setState({
  //           confirmation: response.data
  //         });
  //       });
  //   }
  // }

  // confirmation = () => {
  //   axios
  //     .get(`/api/confirmed/${this.props.confirmedTask.confirmation_id}`)
  //     .then(response => {
  //       console.log("herroasdsafsf", response.data);
  //       this.setState({
  //         confirmation: response.data[0]
  //       });
  //     });
  // };

  render() {
    console.log(this.props, "kadsklfjs9ur");

    return (
      <div>
        {this.props.confirmedTask.length &&
          this.props.confirmedTask[0].confirmation_id}
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
