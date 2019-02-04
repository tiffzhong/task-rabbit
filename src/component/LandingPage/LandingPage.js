import React, { Component } from 'react';
import LandingPage_TaskCards from './LandingPage_TaskCards';

export default class LandingPage extends Component {
    render() {
        return (
            <div className='LandingPage-component'>
                <LandingPage_TaskCards />
            </div>
        );
    }
}