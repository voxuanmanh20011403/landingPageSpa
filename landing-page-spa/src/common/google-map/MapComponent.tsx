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
    <LoadScript
      googleMapsApiKey={import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap mapContainerStyle={mapStyles} zoom={17} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
