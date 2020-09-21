import { orderByDistance } from "geolib";
import compare from "./compareRanks";

export function moveNear() {}

export function assignHero(heroes, threat) {
  const coordinates = orderByDistance(
    { latitude: threat.lat, longitude: threat.lng },
    heroes.map((hero) => ({ latitude: hero.lat, longitude: hero.lng }))
  );

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

  const assignedHero = heroesOrdinated.filter((hero) => {
    if (compare(hero.rank, threat.rank)) {
      return hero;
    }
  });

  return assignedHero.length === 0 ? false : assignedHero[0];
}
