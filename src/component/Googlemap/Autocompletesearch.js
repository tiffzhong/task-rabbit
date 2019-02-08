import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import Autocomplete from "react-google-autocomplete";
import { connect } from "react-redux";
import { updateLocationStart } from "../../ducks/clientReducer";

class AutocompleteSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: {}
    };
  }
  render() {
    console.log("this.state.place", this.state.place);

    return (
      <div>
        <Autocomplete
          style={{ width: "250%" }}
          onPlaceSelected={place => {
            var lat = place.geometry.location.lat();
            var lng = place.geometry.location.lng();
            this.setState({
              place: {
                address: place.formatted_address,
                lat: lat,
                lng: lng
              }
            });
            if (this.state.place) {
              this.props.updateLocationStart(place.formatted_address);
            }
          }}
          types={["geocode"]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { locationStart } = state.client;
  return {
    locationStart
  };
};

const mapDispatchToProps = {
  updateLocationStart: updateLocationStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  GoogleApiWrapper({ apiKey: process.env.REACT_APP_GOOGLE_MAP })(
    AutocompleteSearch
  )
);
