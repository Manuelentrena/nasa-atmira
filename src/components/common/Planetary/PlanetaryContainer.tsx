// Dependencies
import { useEffect } from "react";
import useSWR from "swr";
import { useHistory } from "react-router-dom";
//hooks
import usePlanetary from "../../hooks/usePlanetary";
//componets
import Planetary from "./Planetary";

type Props = {
  url: string;
};

export default function PlanetaryContainer({ url }: Props) {
  let history = useHistory();
  const { data, error } = useSWR(url);
  const { addPlanet } = usePlanetary();

  useEffect(() => {
    data && addPlanet(data);
  }, [data, addPlanet]);

  if (error || data.error) {
    return null;
  }

  if (!data) {
    return null;
  }

  const handleClick = () => {
    const partsUrl: string[] = data.date.split("-");
    const [year, month, day] = partsUrl;
    history.push(`/${year}/${day}/${month}`);
  };

  return (
    <Planetary
      image={data.url}
      title={data.title}
      date={data.date}
      handleClick={handleClick}
    />
  );
}
