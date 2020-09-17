import React from "react";
import "./style.css";

export default function Component({ rank, lat, lng }) {
  return (
    <div lat={lat} lng={lng} className={`threat-marker-${rank}`}>
      {rank}
    </div>
  );
}
