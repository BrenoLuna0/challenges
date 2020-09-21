import React from "react";
import "./style.css";

export default function Component({ rank, lat, lng, onClick }) {
  return (
    <div
      lat={lat}
      lng={lng}
      className={`threat-marker-${rank}`}
      onClick={onClick}
    >
      <div style={{ marginTop: 18 }}>{rank}</div>
    </div>
  );
}
