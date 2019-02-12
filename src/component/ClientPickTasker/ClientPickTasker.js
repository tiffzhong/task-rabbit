import React, { Component } from "react";
import "./ClientPickTasker.css";
import axios from "axios";
import { connect } from "react-redux";
import { allTaskerForClient } from "../../ducks/clientReducer";

class clientPickTasker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaytasker: []
        };
    }
    componentDidMount() {
        this.displayAllTaskers();
    }

    displayAllTaskers = () => {
        this.props.allTaskerForClient().then(response => {
            console.log(response, "hello wurld");
            this.setState({
                displaytasker: this.props.allTaskers
            });
        });
    };

    render() {
        const { allTasker } = this.props;
        console.log("this.props=>>>>", this.props);

        return (
            <div className="taskercontainer">
                PickTasker
                <button>Edit Task</button>
        {/* <p> {allTaskers} </p> */}
            </div>
        );
    }
}
const mapStateToProps = state => {
    const { allTaskers } = state.client;
    return {
        allTaskers
    };
};

const mapDispatchToProps = {
    allTaskerForClient: allTaskerForClient
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(clientPickTasker);
