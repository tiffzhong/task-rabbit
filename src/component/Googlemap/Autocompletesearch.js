import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import Autocomplete from "react-google-autocomplete";

class AutocompleteSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: []
    };
  }
  render() {
    console.log("this.state.place", this.state.place);
    return (
      <div>
        <Autocomplete
          style={{ width: "250%" }}
          onPlaceSelected={place => {
            this.setState({
              place: place.formatted_address
            });
          }}
          types={["geocode"]}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_GOOGLE_MAP })(
  AutocompleteSearch
);
