import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import "./style.css";
import options from "../../utils/mapOptions";
import { assignHero } from "../../utils/geoLocation";

import HeroMarker from "../../components/HeroMarker";
import ThreatMarker from "../../components/ThreatMarker";
import MarkerView from "../../components/MarkerViewer";
import Log from "../../components/LogBox";
import ButtonHeroForm from "../../components/ButtonHeroForm";

export default function Home() {
  const [markerView, setMarkerView] = useState({});
  const [logs, setLogs] = useState([
    { id: 1, message: "TESTE DE LOG 1" },
    { id: 2, message: "TESTE DE LOG 2" },
    { id: 3, message: "TESTE DE LOG 3" },
    { id: 4, message: "TESTE DE LOG 4" },
  ]);
  const [heroes, setHeroes] = useState([]);
  const [threats, setThreats] = useState([]);

  const attack = (threat, hero) => {
    setTimeout(() => {
      setHeroes((state) =>
        state.map((h) => {
          return hero.id === h.id
            ? {
                name: h.name,
                rank: h.rank,
                lat: threat.lat + 10,
                lng: threat.lng + 10,
              }
            : h;
        })
      );
    }, 3000);

    //atualizar os dados no banco de dados
    //atualizar o log com o hero e a threat
    setTimeout(() => {
      setThreats((state) =>
        state.filter((t) => {
          return threat.name !== t.name;
        })
      );
    }, 3000);
  };

  const updateMarkerView = (marker) => {
    setMarkerView({
      name: marker.name,
      rank: marker.rank,
      lat: marker.lat,
      lng: marker.lng,
    });
  };

  useEffect(() => {
    const loadHeores = () => {
      setHeroes([
        { name: "Endevour", rank: "S", lat: 59.955413, lng: 30.337844, id: 1 },
        { name: "Midorya", rank: "A", lat: 24.955413, lng: -8.337844, id: 2 },
        {
          name: "Mikasa Arckeman",
          rank: "B",
          lat: 1.955413,
          lng: 0.337844,
          id: 3,
        },
        {
          name: "Homem Sereia",
          rank: "C",
          lat: 80.955413,
          lng: 80.337844,
          id: 4,
        },
      ]);

      setThreats([
        {
          lat: -8.2569,
          lng: -35.9597,
          rank: "God",
          name: "God Eater",
        },
      ]);
    };
    loadHeores();
  }, []);

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
        {heroes.map((hero, index) => {
          return (
            <HeroMarker
              key={index}
              lat={hero.lat}
              lng={hero.lng}
              rank={hero.rank}
              name={hero.name}
              onClick={() => {
                updateMarkerView(hero);
              }}
            />
          );
        })}
        <ThreatMarker
          lat={-8.2569}
          lng={-35.9597}
          rank="God"
          name="God Eater"
          onClick={() => {
            updateMarkerView({
              name: "God Eater",
              rank: "God",
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
      <Log logs={logs} />
      <ButtonHeroForm />
    </div>
  );
}
