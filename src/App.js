import React from "react";
import GoogleMapReact from "google-map-react";
import "./App.css";

const options = () => ({
  zoomControl: false,
  fullscreenControl: false,
  disableDoubleClickZoom: true,
  keyboardShortcuts: false,
  scrollwheel: false,
  panControl: false,
  styles: [
    {
      featureType: "administrative",
      stylers: [{ color: "#333333" }],
    },
    {
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "landscape",
      stylers: [{ color: "#333333" }],
    },
    {
      featureType: "water",
      stylers: [{ color: "#b0b0b0" }],
    },
  ],
});

function App() {
  return (
    <div className="global-map">
      <GoogleMapReact
        bootstrapURLKeys={{
          language: "pt",
          region: "br",
        }}
        defaultZoom={0}
        defaultCenter={{
          lat: 0,
          lng: 0,
        }}
        options={options}
      >
        <div lat={59.955413} lng={30.337844}>
          My Marker
        </div>
      </GoogleMapReact>
    </div>
  );
}

export default App;
