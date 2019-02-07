import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Autocomplete from "react-google-autocomplete";

class AutocompleteSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            place: {}
        }
    }
    render() {
        console.log("this.state.place", this.state.place)

        return (
            <div>
                <Autocomplete
                    style={{ width: '100%' }}
                    onPlaceSelected={(place) => {
                        var lat = place.geometry.location.lat()
                        var lng = place.geometry.location.lng()
                        this.setState({
                            place: {
                                address: place.formatted_address, lat: lat, lng: lng
                            }

                        })

                    }}
                    types={['geocode']}
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_GOOGLE_MAP })(AutocompleteSearch);