import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 16.0685096, // Latitude của Zenith Spa
    lng: 108.2447479, // Longitude của Zenith Spa
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBfKx_XTgk1kIKd1hPTxrs5mzSv6r27zGs">
      <GoogleMap mapContainerStyle={mapStyles} zoom={17} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
