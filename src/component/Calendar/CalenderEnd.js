import React, { Component } from "react";
import DateTimePicker from "react-datetime-picker";
import { updateEndDate } from "../../ducks/clientReducer";
import { connect } from "react-redux";
import moment from "moment";

class CalendarEnd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endDate: new Date()
    };
  }
  onChange = endDate => this.setState({ endDate });

  onChange = endDate => {
    console.log("endDate ====> ", endDate);
    console.log("endDate in state ===> ", this.state.endDate);
    this.setState({ endDate });
    if (this.state.endDate) {
      this.props.updateEndDate(endDate);
    }
  };

  render() {
    console.log(this.props, "in end calendar");
    let date = JSON.stringify(this.props.default) || "";
    console.log(date, "does json work");
    return (
      <div>
        <DateTimePicker
          onChange={this.onChange}
          value={this.state.endDate}
          disableClock={true}
          //   defaultValue={date ? date : new Date()}
          //   placeholderText={date ? date : new Date()}
          placeholderText={
            this.props.default
              ? moment(this.props.default, "DD-MM-YYYY")
              : moment()
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { endDate } = state.client;
  return {
    endDate
  };
};

const mapDispatchToProps = {
  updateEndDate: updateEndDate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarEnd);
