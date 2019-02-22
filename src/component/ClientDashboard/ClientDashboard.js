import React, { Component } from 'react';
import './ClientDashboard.css';
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getConfirmation } from '../../ducks/taskerReducer';
import axios from 'axios';

class ClientDashboard extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    this.getAllConfirmations();
  }

  getAllConfirmations = () => {
    const { user } = this.props;
      console.log('do I have this user?', user);
      axios.get(`/messages/${user && user.auth0_id}`).then(tasks => {
        console.log('the tasks', tasks.data)
        this.setState({
          tasks: tasks.data
        })
      })
      
  }

  render() {
    const { user } = this.props;
    const { tasks } = this.state;
    console.log('taska-lacka', tasks);
    let myTasks = tasks.map(task => {
      return (
        <div>
          <p>{task.task} with {task.tasker_name}</p>
          <NavLink to={`/messages-personal/${task.confirmation_id && task.confirmation_id}`}><button>Send Message</button></NavLink>
        </div>
      )
    })
    return (
      <div className='clientDashboard-component'>
        <div className='dashboard-container'>
          <div className='dashboard-title'>
            <h1>Client Dashboard</h1>
          </div>
          <div className='dashboard-box-container'>
            <div className='dashboard-box'>
              <img  src={user && user.picture} />
              <h2 className='dashboard-box-info'>{user && user.name}</h2>
              <p className='dashboard-box-info'>Email: {user && user.email}</p>
              {/* <p>Phone: {user && user.email}</p> */}
              <Link className='dashboard-box-link' to={`/edit-client-profile/${this.props.match.params.client_id}`}>
                Edit Profile
              </Link>
            </div>
            <div className='dashboard-box dashboard-box-width' >
              <p>Your Booked Tasks</p>
              <div>
                {myTasks}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state.tasker;
  return {
    user
  }
}

const mapDispatchToProps = {
  getConfirmation: getConfirmation
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientDashboard);