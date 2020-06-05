import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends React.Component {
    render() {
      const mapStyles = {
        width: "100%",
        height: "100%",
      };
      return (
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{ lat: 37.3347, lng: -121.8815 }}
        >
            <Marker position={{ lat: 37.3347, lng: -121.8815 }}/>
        </Map>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyB6nvrLCTEpzIfVuMpTUi3HJAI4C9NO5oU'
  })(MapContainer);
  