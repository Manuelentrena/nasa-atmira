import { useState, createContext, useCallback } from "react";
import { Planet, PlanetContextType, Props } from "./types";

const contextDefaultValues: PlanetContextType = {
  listPlanet: [],
  addPlanet: () => {},
};

const PlanetaryContext = createContext<PlanetContextType>(contextDefaultValues);

export function PlanetaryContextProvider({ children }: Props) {
  const [listPlanet, setlistPlanet] = useState<Planet[]>([]);
  const addPlanet = useCallback(
    (newPlanet: Planet) =>
      setlistPlanet((prevPlanets) => [...prevPlanets, newPlanet]),
    []
  );

  return (
    <PlanetaryContext.Provider value={{ listPlanet, addPlanet }}>
      {children}
    </PlanetaryContext.Provider>
  );
}

export default PlanetaryContext;
