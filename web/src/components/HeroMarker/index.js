import React from "react";
import "./style.css";

export default function Component({ rank, name, lat, lng, onClick }) {
  return (
    <div
      lat={lat}
      lng={lng}
      className={`marker-container-${rank}`}
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
    >
      {rank}
    </div>
  );
}
