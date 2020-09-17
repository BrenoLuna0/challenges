import React from "react";
import "./style.css";

export default function Component({ rank, name, lat, lng }) {
  return (
    <div lat={lat} lng={lng} className={`marker-container-${rank}`}>
      <div className="marker-title">{name}</div>
      <div className={`marker-rank-${rank}`}>{rank}</div>
    </div>
  );
}
