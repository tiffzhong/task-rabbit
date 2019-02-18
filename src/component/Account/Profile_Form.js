import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Profile_Form(props) {
    const { user } = props;
    console.log('proppies', props);
    return(
        <div className='form-component'>
            <div className='form-component-inner'>
                <div className='form-component-title'>
                    <h2>Account</h2>
                </div>
                {
                    user ? 
                    <div className='profile-info'>
                        <img src={user.picture} />
                        <div className='profile-info-inner'>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <div className='dashboard-links'>
                                <Link to='/confirmedTasks' className='dashboard_link'><span>Client Dashboard</span></Link>
                                <Link to={`/tasker-dashboard/${user.auth0_id}`} className='dashboard_link'><span>Tasker Dashboard</span></Link>
                            </div>
                        </div>
                    </div>
                    :
                    <p>Loading</p>
                }
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    const { user } = state.tasker;
    return {
        user
    }
}

const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(Profile_Form);