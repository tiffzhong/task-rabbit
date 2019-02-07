import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker'
import { updateEndDate } from '../../ducks/clientReducer';
import { connect } from 'react-redux';

class CalendarEnd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endDate: new Date(),

        }
    }
    // onChange = endDate => this.setState({ endDate })

    onChange = (endDate) => {
        console.log('endDate ====> ', endDate)
        this.props.updateEndDate({endDate})
    }


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

const mapStateToProps = state => {
    const { endDate } = state.client;
    return {
        endDate
    }
}

const mapDispatchToProps = {
    updateEndDate: updateEndDate,
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarEnd);