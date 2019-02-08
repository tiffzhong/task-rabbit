import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateVehicle } from '../../../ducks/clientReducer';

class Vehicle extends Component {
    render() {
        return (
            <div>
                {!this.props.durationToggle ?
                        <div className='question-box'>
                            <div className='inner-container'>
                                <p>VEHICLE</p>
                                <h2>Vehicle Requirements</h2>
                                {/* <input placeholder='Is a vehicle needed for this task? If yes, please specify a car or truck' onChange={e => this.props.updateVehicle(e.target.value)}></input> */}
                                <div className='checkbox-input-container'>
                                    <div className='checkbox-input'>
                                        <input type='radio' name='radio'  id='vehicleNa'  defaultChecked={false} onClick={() => this.props.updateVehicle(null)} />
                                        <label className='duration-radio'>NA</label>
                                    </div>
                                    <div className='checkbox-input'>
                                        <input type='radio' name='radio'  id='vehicleCar'   onClick={() => this.props.updateVehicle('Car')}/>
                                        <label className='duration-radio'>Car</label>
                                    </div>
                                    <div className='checkbox-input'>
                                        <input type='radio' name='radio'  id='vehicleTruck'  onClick={() => this.props.updateVehicle('Truck')} />
                                        <label className='duration-radio'>Truck</label>
                                    </div>
                                </div>
                                <div className='form-button'>
                                    <button onClick={() => this.handleToggle('vehicleToggle', true, this.props.vehicle)}>Continue</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='toggle-box' onClick={()=>this.handleToggle('vehicleToggle', false, this.props.vehicle)}>
                            <p>VEHICLE</p>
                        </div>
                    }
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { vehicle } = state.client;
    return {
        vehicle,
    }
}

const mapDispatchToProps = {
    updateVehicle: updateVehicle
}

export default connect(mapStateToProps, mapDispatchToProps)(Vehicle)