import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker'



class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),

        }
    }
    onChange = date => this.setState({ date })




    render() {
        return (<div>
            <DateTimePicker
                onChange={this.onChange}
                value={this.state.date}
                disableClock={true}
            />

        </div>);
    }
}

export default Calendar;