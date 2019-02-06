import React, { Component } from "react";
import { connect } from "react-redux";
import { createExpertise } from "../../ducks/taskerReducer";
import "./TaskerExpertise.css";
class TaskerExpertise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mounting: false,
      mountingHourly: "",
      delivery: false,
      deliveryHourly: "",
      yard: false,
      yardHourly: "",
      home: false,
      homeHourly: "",
      moving: false,
      movingHourly: "",
      pet: false,
      petHourly: "",
      furniture: false,
      furnitureHourly: "",
      cleaning: false,
      cleaningHourly: "",
      cooking: false,
      cookingHourly: ""
    };
  }
  componentDidMount() {}

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { tasker_id, skill, pricing } = this.props;
    return (
      <div className="tasker-expertise-window">
        <h2>What is your hourly rate?</h2>
        <input
          type="checkbox"
          name="mounting"
          checked={this.state.mounting}
          onClick={e => this.handleChange(e.target.name)}
        />
        <label>Mounting & Installation</label>
        <input name="mountingHourly" />
        <button
          onClick={() => {
            createExpertise(tasker_id, skill, pricing);
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let { taskerSkills } = state;
  return { taskerSkills };
}
export default connect(
  mapStateToProps,
  { createExpertise }
)(TaskerExpertise);
