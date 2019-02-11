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
            formType: 'moving'
        }
    }

    render() {
        return (
            <div className='edit-outer-container'>
                Client Edit
                {
                    this.state.formType && this.state.formType
                    ?
                        this.state.formType === 'moving' || 'yardwork' 
                        ?
                        <div className='edit-inner-container'>
                            <LocationDual />
                            <Duration />
                            <Vehicle />
                            <Schedule />
                            <Details />
                        </div>
                        :
                        this.state.formType === 'mounting'
                        ?
                        <div>
                            <LocationSingle />
                            <Duration />
                            <Vehicle />
                            <Schedule />
                            <Details />
                        </div>
                        :
                        this.state.formType === 'delivery'
                        ?
                        <div>
                            <LocationDual />
                            <Duration />
                            <Schedule />
                            <Details />
                        </div>
                        :
                        this.state.formType === 'furniture' || 'home' || 'cleaning' || 'pet' || 'cooking'
                        ?
                        <div>
                            <LocationSingle />
                            <Duration />
                            <Schedule />
                            <Details />
                        </div>
                        :
                        <div>

                        </div>
                    :
                    <div>
                        Not Working
                    </div>
                    
                }
            </div>
        );
    }
}

export default ClientEdit;