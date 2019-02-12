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
  componentDidMount() {
    this.confirmation();
    // this.getTasker();
  }

  confirmation = () => {
    axios
      .get(`/api/confirmed/${this.props.confirmedTask[0].confirmation_id}`)
      .then(response => {
        console.log("herroasdsafsf", response.data);
        this.setState({
          confirmation: response.data[0]
        });
      });
  };

  // getTasker = () => {
  //   axios.get("/api/pickatasker").then(response => {
  //     console.log(response.data, "twerkinn??");
  //     this.setState({
  //       tasker: response.data[0].tasker_id
  //     });
  //   });
  // };

  // getClient = () => {
  //   axios.get("")
  // }
  render() {
    console.log(this.props, "kadsklfjs9ur");
    return <div />;
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
