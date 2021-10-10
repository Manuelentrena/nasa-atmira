// Dependencies
import { useContext, useEffect } from "react";
import useSWR from "swr";
// Context
import PlanetaryContext from "../../providers/PlanetaryContext";
// Utils
import { exitPlanet } from "../../utils/existPlanet";

export default function usePlanet(url: string | null = null) {
  const { addPlanet, listPlanet } = useContext(PlanetaryContext);
  const { data, error } = useSWR(url);

  useEffect(() => {
    data && !exitPlanet(data, listPlanet) && addPlanet(data);
  }, [data, addPlanet, listPlanet]);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    addPlanet,
  };
}
