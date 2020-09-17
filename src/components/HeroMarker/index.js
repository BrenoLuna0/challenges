import React from "react";

export default function Component({ rank, name }) {
  return (
    <div className={`marker-container-${rank}`}>
      <div></div>
      <div></div>
    </div>
  );
}
