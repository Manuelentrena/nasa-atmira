import { useContext } from "react";
import PlanetaryContext from "../../providers/PlanetaryContext";

export default function usePlanetary() {
  const { listPlanet, addPlanet } = useContext(PlanetaryContext);

  return {
    listPlanet,
    addPlanet,
  };
}
