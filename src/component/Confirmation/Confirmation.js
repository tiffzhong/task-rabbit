import React, { Component } from 'react';
import ConfirmationMap from "./ConfirmationMap";
import "./Confirmation.css";
import Autocompletesearch from '../Googlemap/Autocompletesearch';

class Confirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="mapcontainer" >
            <Autocompletesearch />
            <div className='map'>
                <ConfirmationMap />


            </div>
        </div>);
    }
}

export default Confirmation;