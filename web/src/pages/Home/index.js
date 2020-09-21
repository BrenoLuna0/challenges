import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import "./style.css";
import options from "../../utils/mapOptions";
import { assignHero } from "../../utils/geoLocation";
import api from "../../services/api";

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

  const [trigger, setTrigger] = useState(true);

  const attack = async (threat, hero) => {
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

    await api
      .put("/hero", {
        id: hero.id,
        lat: threat.lat + 10,
        lng: threat.lng + 10,
      })
      .then(() => {
        setTrigger(!trigger);
      })
      .catch((err) => {
        console.log(err);
      });

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

  const addHero = async (hero) => {
    let shallowCopy = [...heroes];
    shallowCopy.push(hero);
    setHeroes(shallowCopy);
    api
      .post("/hero", {
        name: hero.name,
        rank: hero.rank,
        lat: hero.lat,
        lng: hero.lng,
      })
      .then(() => {
        setTrigger(!trigger);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const loadHeores = async () => {
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
    loadHeores();
    loadLogs();
  }, [trigger]);

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
