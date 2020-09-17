import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import "./style.css";
import options from "../../utils/mapOptions";

import HeroMarker from "../../components/HeroMarker";
import ThreatMarker from "../../components/ThreatMarker";
import MarkerView from "../../components/MarkerViewer";

export default function Home() {
  const [markerView, setMarkerView] = useState({});

  const updateMarkerView = (marker) => {
    setMarkerView({
      name: marker.name,
      rank: marker.rank,
      lat: marker.lat,
      lng: marker.lng,
    });
  };

  return (
    <div className="global-map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyBYWhBtY6_0FUdsBKO-18Vmf0d3Vdppsco",
          language: "pt",
          region: "br",
        }}
        zoom={1}
        defaultCenter={{
          lat: 0,
          lng: 0,
        }}
        options={options}
      >
        <HeroMarker
          lat={59.955413}
          lng={30.337844}
          rank="C"
          name="Endevour asdasd asdasdasd asdasda sd"
          onClick={() => {
            updateMarkerView({
              name: "Endevour",
              rank: "C",
              lat: 59.955413,
              lng: 30.337844,
            });
          }}
        />
        <ThreatMarker
          lat={-8.2569}
          lng={-35.9597}
          rank="Wolf"
          name="God Eater"
          onClick={() => {
            updateMarkerView({
              name: "God Eater",
              rank: "Wolf",
              lat: 59.955413,
              lng: 30.337844,
            });
          }}
        />
      </GoogleMapReact>
      <MarkerView
        rank={markerView.rank || ""}
        name={markerView.name || ""}
        lat={markerView.lat}
        lng={markerView.lng}
        onClick={() => {
          updateMarkerView({ rank: "", name: "", lat: "", lng: "" });
        }}
      />
    </div>
  );
}
