import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { connect } from 'react-redux';
import { updateStartDate } from '../../ducks/clientReducer';



class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),

        }
    }
    // onChange = date => {
    //     console.log('date ====> ', date)
    //     this.setState({ date })
    // }

    onChange = (date) => {
        console.log('date ====> ', date)
        this.props.updateStartDate({date})
    }



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

const mapStateToProps = state => {
    const { startDate } = state.client;
    return {
        startDate
    }
}

const mapDispatchToProps = {
    updateStartDate: updateStartDate,
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);