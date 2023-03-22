import React from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class Maps extends React.Component {
    render() {
      const mapStyles = {
        width: "100%",
        height: "100%",
      };
      return (
        <div>
      <h1>Hii</h1>
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{ lat: 9.761927, lng: 79.95244 }}
        />
        </div>
      );
    }
  }

export default Map
  