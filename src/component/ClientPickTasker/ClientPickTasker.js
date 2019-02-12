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

    // const allTaskers = this.state.picktasker.map(taskers=>{
    //     return(  <div>
    //         <div> {taskers.tasker_name} </div>
    //         <div> <img src={taskers.selfie}/> </div>
    //         <div>{taskers.email} </div>
    //         <div>{taskers.about} </div>
    //         <div>hourly amount?</div>

    //      </div>
    //          )
    // })
    return (
      <div className="taskercontainer">
        PickTasker
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
