import React, { useState } from "react";
import "./style.css";

export default function Component({ onSend, onClickOutside }) {
  const [heroName, setHeroName] = useState("");
  const [heroRank, setHeroRank] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  return (
    <div className="form-hero" onClick={onClickOutside}>
      <input
        className="hero-name"
        type="text"
        placeholder="Hero name"
        value={heroName}
        onChange={(e) => {
          setHeroName(e.target.value);
        }}
      />
      <select
        onChange={(e) => {
          setHeroRank(e.target.value);
        }}
      >
        <option value="">Hero Rank</option>
        <option value="C">C</option>
        <option value="B">B</option>
        <option value="A">A</option>
        <option value="S">S</option>
      </select>
      <input
        className="hero-lat"
        type="number"
        placeholder="Latitude"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
      />
      <input
        className="hero-lng"
        type="number"
        placeholder="Longitude"
        value={lng}
        onChange={(e) => setLng(e.target.value)}
      />

      <div
        className="hero-form-submit"
        onClick={(e) => {
          e.preventDefault();
          if (heroName === "" || heroRank === "" || lat === "" || lng === "") {
            alert("Dados inválidos");
          } else {
            onSend({ name: heroName, rank: heroRank, lat, lng });
          }
        }}
      >
        Register
      </div>
    </div>
  );
}
