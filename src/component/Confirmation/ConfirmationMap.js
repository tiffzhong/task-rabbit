
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


    // addMarker = () => {
    //     var myLatLng = { lat: -25.363, lng: 131.044 };

    //     var map = new google.maps.Map(document.getElementById('map'), {
    //         zoom: 4,
    //         center: myLatLng
    //     });

    //     var marker = new google.maps.Marker({
    //         position: myLatLng,
    //         map: map,
    //         title: 'Hello World!'
    //     });
    // }


    onClose = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }



    render() {
        console.log("place", this.state.selectedPlace)
        const mapStyles = {
            width: '45%',
            height: '45%'
        }
        // name={'Current location'}


        ///once i have the user's address, lat and lng I can get it axios from DB map over it and dispay long and lat

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
                    // position={{ lat, lng }}




                    />

                    <InfoWindow
                    // marker={this.state.activeMarker}
                    // visible={this.state.showingInfoWindow}
                    // onClose={this.onClose}
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