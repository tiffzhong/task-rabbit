import React, { Component } from 'react';
import ConfirmationMap from "./ConfirmationMap";
import "./Confirmation.css";
import Autocompletesearch from '../Googlemap/Autocompletesearch';
import axios from "axios"
import { get } from 'http';

class Confirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirm: []
        }
    }
    componentDidMount() {
        this.confirmationForm()
    }

    confirmationForm = () => {
        axios.get('/api/confirmation').then(response => {
            console.log("data", response.data)
            this.setState({
                confirm: response.data
            })

        })
    }
    render() {
        console.log("state", this.state.confirm)

        const confirmationClientTasker = this.state.confirm.map(booked => {

            return (
                <div>
                    <div><img src={booked.picture} alt="userimage" key="user" /></div>
                    <div>{booked.name}</div>
                    <div>{booked.email}</div>
                    <div>{booked.duration}</div>
                    <div>{booked.startdate}</div>
                    <div>{booked.enddate}</div>
                    <div>{booked.locationstart}</div>
                    <div><img src={booked.selfie} alt="taskerimage" key="task" /></div>
                    <div>{booked.tasker_name}</div>
                    <div>{booked.tasktype}</div>
                    <div>{booked.taskdetails}</div>

                    <div>{booked.tasktype == 'Delivery Service' ? booked.deliveryhourly : booked.tasktype === 'Cleaning Service' ? booked.cleaninghourly : null}</div>

                </div>
            )
        })
        return (
            <div>

                <div className="mapcontainer" >
                    {confirmationClientTasker}
                    {/* <Autocompletesearch /> */}
                    <div className='map'>
                        <ConfirmationMap />


                    </div>

                </div>
            </div>);
    }
}

export default Confirmation;