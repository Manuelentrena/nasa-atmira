// Dependencies
import { useEffect } from "react";
import useSWR from "swr";
import usePlanetary from "../../hooks/usePlanetary";
import Planetary from "./Planetary";

type Props = {
  url: string;
};

export default function PlanetaryContainer({ url }: Props) {
  const { data, error } = useSWR(url);
  const { addPlanet } = usePlanetary();

  useEffect(() => {
    data && addPlanet(data);
  }, [data]);

  if (error || data.error) {
    return null;
  }

  if (!data) {
    return null;
  }

  return <Planetary image={data.url} title={data.title} date={data.date} />;
}
