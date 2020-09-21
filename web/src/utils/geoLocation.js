import { orderByDistance } from "geolib";
import compare from "./compareRanks";

export function moveNear() {}

export function assignHero(heroes, threat) {
  console.log(heroes);
  console.log(threat);
  const coordinates = orderByDistance(
    { latitude: threat.location[0].lat, longitude: threat.location[0].lng },
    heroes.map((hero) => ({ latitude: hero.lat, longitude: hero.lng }))
  );
  //console.log(coordinates);

  const heroesOrdinated = coordinates.map((coordinate) => {
    const newHero = heroes.filter((hero) => {
      if (
        hero.lat === coordinate.latitude &&
        hero.lng === coordinate.longitude
      ) {
        return hero;
      }
    });
    return newHero[0];
  });

  //console.log(heroesOrdinated);

  const assignedHero = heroesOrdinated.filter((hero) => {
    if (compare(hero.rank, threat.dangerLevel)) {
      return hero;
    }
  });

  //console.log(assignedHero);

  return assignedHero.length === 0 ? false : assignedHero[0];
}
