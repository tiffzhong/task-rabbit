import React, { Component } from 'react';
import { GoogleApiWrapper, Map, InfoWindow, Marker } from 'google-maps-react';


class Googlemap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        }
    }
    onMarkerClick = (props, marker) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    }

    onClose = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: true,
                activeMarker: null
            })
        }
    }



    render() {

        const mapStyles = {
            width: '50%',
            height: '50%'
        }

        return (<div>


            <button onClick={() => this.onMarkerClick()}>See Map</button>
            <button onClick={(e) => this.onClose(e)}>Hide Map</button>
            <Map
                google={this.props.google}
                zoom={5}
                style={mapStyles}
                visible={true}
                initialCenter={{ lat: 33.4484, lng: -112.0740 }}
            >
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Current location'}
                />

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>

                </InfoWindow>







            </Map>

        </div>);
    }
}

export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_GOOGLE_MAP })(Googlemap);