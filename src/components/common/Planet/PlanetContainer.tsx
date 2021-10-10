// Dependencies
import { useHistory } from "react-router-dom";
import { infoPlanet } from "../../../types/types";
// Hooks
import usePlanet from "../../hooks/usePlanet";
// Components
import Planetary from "./Planet";
import LoadingSkeleton from "../Skeleton/LoadingSketeon";

export default function PlanetContainer({ url }: { url: string }) {
  let history = useHistory();
  const { data, isLoading, isError }: infoPlanet = usePlanet(url);

  if (isLoading) return <LoadingSkeleton />;
  if (isError) return <p>Error</p>;

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
