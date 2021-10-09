import React, { useState } from "react";

const PlanetaryContext = React.createContext({});

type Props = { children: any };

export function PlanetaryContextProvider({ children }: Props) {
  const [listPlanet, setlistPlanet] = useState([]);

  return (
    <PlanetaryContext.Provider value={{ listPlanet, setlistPlanet }}>
      {children}
    </PlanetaryContext.Provider>
  );
}

export default PlanetaryContext;
