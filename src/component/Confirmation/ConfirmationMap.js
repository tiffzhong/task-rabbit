import React, { Component } from "react";
import { GoogleApiWrapper, Map, InfoWindow, Marker } from "google-maps-react";
import "./Confirmation.css";
class Googlemap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  componentDidMount() {
    this.onMarkerClick();
  }

  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  render() {
    console.log("place", this.state.selectedPlace);
    const mapStyles = {
      width: "100%",
      height: "70%"
    };
    console.log(" lat***", this.props.lat);
    console.log(" lng***", this.props.lng);
    const { lat, lng } = this.props;
    return (
      <div className="google-mapper">
        <div>
          <Map
            google={this.props.google}
            zoom={13}
            style={mapStyles}
            initialCenter={{ lat: 40, lng: -88 }}
            center={{ lat, lng }}
            onClick={this.onMapClicked}
          >
            <Marker position={{ lat, lng }} />

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            />
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_GOOGLE_MAP })(
  Googlemap
);
