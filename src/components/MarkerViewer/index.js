import React from "react";
import "./style.css";

export default function Component({ rank, name, lat, lng, onClick }) {
  return (
    <div className={`marker-viewer-container-${rank}`}>
      <div className={`marker-viewer-rank-${rank}`}>{rank}</div>
      <div className="marker-viewer-info">
        <p>Identity: {name}</p>
        <p>
          Location: {lat}, {lng}
        </p>
      </div>
      <div className={`marker-viewer-close-${rank}`} onClick={onClick}>
        Close
      </div>
    </div>
  );
}
