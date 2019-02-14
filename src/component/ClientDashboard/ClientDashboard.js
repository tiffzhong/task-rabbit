import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ClientDashboard extends Component {
  constructor() {
    super();
    this.state = {

    }
  }


  render() {
    return (
      <div>
        Client Dashboard
        <Link to={`/edit-client-profile/${this.props.match.params.client_id}`}>
          Edit Profile
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {

  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ClientDashboard);