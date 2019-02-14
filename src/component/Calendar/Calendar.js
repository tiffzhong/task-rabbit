import React, { Component } from "react";
import DateTimePicker from "react-datetime-picker";
import { connect } from "react-redux";
import { updateStartDate } from "../../ducks/clientReducer";
import moment from "moment";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  onChange = date => {
    console.log("date ====> ", date);
    this.setState({ date });
    if (this.state.date) {
      this.props.updateStartDate(date);
    }
  };

  // onChange = (date) => {
  //     console.log('date ====> ', date)
  //     this.props.updateStartDate({date})
  // }

  render() {
    console.log(this.props, "in calendar");
    let date = JSON.stringify(this.props.default) || "";
    return (
      <div>
        <DateTimePicker
          onChange={this.onChange}
          value={this.state.date}
          disableClock={true}
          //   defaultValue={
          //     this.props.default
          //       ? moment(this.props.default, "DD-MM-YYYY")
          //       : moment()
          //   }
          placeholderText={
            this.props.default
              ? moment(this.props.default, "DD-MM-YYYY")
              : moment()
          }
          //   selected=
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { startDate } = state.client;
  return {
    startDate
  };
};

const mapDispatchToProps = {
  updateStartDate: updateStartDate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
