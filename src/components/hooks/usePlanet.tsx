// Dependencies
import { useContext, useEffect } from "react";
import useSWR from "swr";
// Context
import PlanetaryContext from "../../providers/PlanetaryContext";

export default function usePlanet(url: string) {
  const { addPlanet } = useContext(PlanetaryContext);
  const { data, error } = useSWR(url);

  useEffect(() => {
    data && addPlanet(data);
  }, [data, addPlanet]);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    addPlanet,
  };
}
