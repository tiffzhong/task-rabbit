import React, { Component } from 'react';
import { GoogleApiWrapper, Map, InfoWindow, Marker } from 'google-maps-react';



class Googlemap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: null,
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
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }



    render() {
        console.log("UUU", process.env.REACT_APP_GOOGLE_MAP)
        const mapStyles = {
            width: '50%',
            height: '50%'
        }

        return (<div>
            <div>
                <Map
                    google={this.props.google}
                    zoom={5}
                    style={mapStyles}
                    // visible={true}
                    initialCenter={{ lat: 39, lng: -93 }}

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
                            <h4>{this.state.selectedPlace}</h4>
                        </div>

                    </InfoWindow>





                </Map>
            </div>



        </div>);
    }
}

export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_GOOGLE_MAP })(Googlemap);