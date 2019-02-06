import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker'



class CalendarEnd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endDate: new Date(),

        }
    }
    onChange = endDate => this.setState({ endDate })




    render() {
        return (<div>
            <DateTimePicker
                onChange={this.onChange}
                value={this.state.endDate}
                disableClock={true}
            />

        </div>);
    }
}

export default CalendarEnd;