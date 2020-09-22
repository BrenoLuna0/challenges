import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import "./style.css";
import options from "../../utils/mapOptions";
import { assignHero } from "../../utils/geoLocation";
import api from "../../services/api";
import socket from "../../services/socket";
import rn from "random-number";

import HeroMarker from "../../components/HeroMarker";
import ThreatMarker from "../../components/ThreatMarker";
import MarkerView from "../../components/MarkerViewer";
import Log from "../../components/LogBox";
import ButtonHeroForm from "../../components/ButtonHeroForm";

export default function Home() {
  const [markerView, setMarkerView] = useState({});
  const [logs, setLogs] = useState([]);
  const [heroes, setHeroes] = useState([]);
  const [threats, setThreats] = useState([]);

  const attack = async (threat) => {
    const distanceLat = rn({ min: -8, max: 8 });
    const distanceLng = rn({ min: -8, max: 8 });
    const hero = assignHero(heroes, threat);
    console.log(hero);
    if (hero === undefined) {
      await api
        .post("/log", {
          message: `No heroes avaliable to handle ${threat.monsterName}`,
        })
        .then(() => {
          fetchData();
        })
        .catch((err) => {
          console.log(err);
        });
      return;
    }

    setTimeout(() => {
      setHeroes((state) =>
        state.map((h) => {
          return hero.id === h.id
            ? {
                name: h.name,
                rank: h.rank,
                lat: threat.location[0].lat + distanceLat,
                lng: threat.location[0].lng + distanceLng,
              }
            : h;
        })
      );
    }, 15000);

    await api
      .put("/hero", {
        id: hero.id,
        lat: threat.location[0].lat + distanceLat,
        lng: threat.location[0].lng + distanceLng,
      })
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      setThreats((state) =>
        state.filter((t) => {
          return threat.name !== t.name;
        })
      );
      api
        .post("/log", {
          message: `${hero.name} destroys ${threat.monsterName}`,
        })
        .then(() => {
          fetchData();
        })
        .catch((err) => {
          console.log(err);
        });
    }, 7000);
  };

  const updateMarkerView = (marker) => {
    setMarkerView({
      name: marker.name,
      rank: marker.rank,
      lat: marker.lat,
      lng: marker.lng,
    });
  };
  const addHero = async (hero) => {
    setHeroes([...heroes, hero]);
    api
      .post("/hero", {
        name: hero.name,
        rank: hero.rank,
        lat: hero.lat,
        lng: hero.lng,
      })
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadHeroes = async () => {
    await api
      .get("/hero")
      .then((response) => {
        setHeroes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const loadLogs = async () => {
    await api
      .get("/log")
      .then((response) => {
        setLogs(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchData = () => {
    loadHeroes();
    loadLogs();
  };

  const subscribe = () => {
    socket.on("occurrence", (threat) => {
      setThreats((state) => [threat, ...state]);
    });
  };

  const attackThreat = () => {
    if (threats.length > 0) {
      threats.map((threat) => {
        attack(threat);
      });
    }
  };

  useEffect(fetchData, []);
  useEffect(subscribe, []);
  useEffect(attackThreat, [threats]);

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
        {threats.map((threat, index) => {
          return (
            <ThreatMarker
              key={index}
              lat={threat.location[0].lat}
              lng={threat.location[0].lng}
              rank={threat.dangerLevel}
              name={threat.monsterName}
              onClick={() => {
                updateMarkerView({
                  name: threat.monsterName,
                  rank: threat.dangerLevel,
                  lat: threat.location[0].lat,
                  lng: threat.location[0].lng,
                });
              }}
            />
          );
        })}
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
      <ButtonHeroForm
        addHero={(hero) => {
          addHero(hero);
        }}
      />
    </div>
  );
}
