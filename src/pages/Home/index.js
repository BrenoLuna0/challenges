import React from "react";
import GoogleMapReact from "google-map-react";
import "./style.css";
import options from "../../utils/mapOptions";

import HeroMarker from "../../components/HeroMarker";
import ThreatMarker from "../../components/ThreatMarker";

export default function Home() {
  return (
    <div className="global-map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyBYWhBtY6_0FUdsBKO-18Vmf0d3Vdppsco",
          language: "pt",
          region: "br",
        }}
        defaultZoom={-1}
        defaultCenter={{
          lat: 0,
          lng: 0,
        }}
        options={options}
      >
        <HeroMarker
          lat={59.955413}
          lng={30.337844}
          rank="S"
          name="Endevour asdasd asdasdasd asdasda sd"
        />
        <ThreatMarker
          lat={-8.2569}
          lng={-35.9597}
          rank="God"
          name="God Eater"
        />
      </GoogleMapReact>
    </div>
  );
}
