import React from "react";
import "./style.css";

export default function Component({ onClick }) {
  return (
    <div className="button" onClick={onClick}>
      Register new Hero
    </div>
  );
}
