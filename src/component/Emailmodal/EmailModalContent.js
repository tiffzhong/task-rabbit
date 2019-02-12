import React, { Component } from 'react';
import "./Emailmodal.css";
import axios from 'axios';

class EmailModalContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }
    }

    getTenDollars = () => {
        const { email } = this.state;
        axios.post("/api/email", { email }).then(response => {
        }).catch(error => console.log("Error in EmailModal", error))
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        console.log("Emailstate!!!", this.state.email)
        return (<div className="emailmodal-profile">
            <h1> Help Your Friends, Get $10</h1>
            <h3>Refer a friend to TaskRabbit. They get $10 off their first task. You get $10 off when they complete it.</h3>
            <h4>Email</h4>
            <input placeholder="Email" name="email" value={this.state.email} onChange={event => this.handleChange(event)} />
            <button onClick={() => { this.getTenDollars(this.state.email) }}>Submit Email</button>
        </div>);
    }
}

export default EmailModalContent;