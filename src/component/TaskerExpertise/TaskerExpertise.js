import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../ducks/reducer";

class TaskerExpertise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      location: "",
      about: ""
    };
  }
  componentDidMount() {}
  render() {
    console.log(this.props, "tasker props");
    return <div />;
  }
}
function mapStateToProps(state) {
  let { user } = state;
  return { user };
}
export default connect(
  mapStateToProps,
  { setUser }
)(TaskerExpertise);
