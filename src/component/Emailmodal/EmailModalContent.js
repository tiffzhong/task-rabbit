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
        let displayName = this.props.display
            ? "modal display-block"
            : "modal display-none"
        return (
            <div className={displayName}>
                <div className="emailmodal-profile">
                    <h4> Help Your Friends, Get $10</h4>
                    <h4>Refer a friend to TaskRabbit. They get $10 off their first task. You get $10 off when they complete it.</h4>
                    <h4>Email</h4>
                    <div className="content-inside-modal">
                        <input placeholder="Email" name="email" value={this.state.email} onChange={event => this.handleChange(event)} />
                    </div>
                    <button className="inside-button" onClick={() => { this.getTenDollars(this.state.email); this.props.onHide() }}>Submit Email</button>
                </div>
                <div className="x-button-modal">
                    <button
                        onClick={() => {
                            this.props.onHide();
                        }}
                    >
                        close
            </button>
                </div>
            </div>);
    }
}

export default EmailModalContent;