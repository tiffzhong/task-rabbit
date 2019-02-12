import React, { Component } from 'react';
import './ClientEdit.css';
import LocationDual from '../Client_Form/QuestionBoxes/LocationDual';
import Duration from '../Client_Form/QuestionBoxes/Duration';
import Vehicle from '../Client_Form/QuestionBoxes/Vehicle';
import Schedule from '../Client_Form/QuestionBoxes/Schedule';
import LocationSingle from '../Client_Form/QuestionBoxes/LocationSingle';
import Details from '../Client_Form/QuestionBoxes/Details';

class ClientEdit extends Component {
    constructor() {
        super();
        this.state = {
            formType: 'pet'
        }
    }

    render() {
        console.log('what the HELLLLLLL',this.state.formType)
        return (
            <div className='form'>
                Client Edit
                {
                        (this.state.formType === 'moving' || this.state.formType === 'yardwork') 
                        ?
                        <div className='outer-container'>
                            <LocationDual />
                            <Duration />
                            <Vehicle />
                            <Schedule />
                            <Details />
                        </div>
                        :
                        (this.state.formType === 'mounting')
                        ?
                        <div className='outer-container'>
                            <LocationSingle />
                            <Duration />
                            <Vehicle />
                            <Schedule />
                            <Details />
                        </div>
                        :
                        (this.state.formType === 'delivery')
                        ?
                        <div className='outer-container'>
                            <LocationDual />
                            <Duration />
                            <Schedule />
                            <Details />
                        </div>
                        :
                        (this.state.formType === 'furniture' || this.state.formType === 'home' || this.state.formType === 'cleaning' || this.state.formType === 'pet' || this.state.formType === 'cooking')
                        ?
                        <div className='outer-container'>
                            <LocationSingle />
                            <Duration />
                            <Schedule />
                            <Details />
                        </div>
                        :
                        <div>

                        </div>
                    
                }
            </div>
        );
    }
}

export default ClientEdit;