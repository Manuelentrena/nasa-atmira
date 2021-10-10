// Dependencies
import { useHistory } from "react-router-dom";
import { infoPlanet } from "../../../types/types";
// Hooks
import usePlanet from "../../hooks/usePlanet";
// Components
import Planet from "./Planet";
import LoadingPlanet from "../Skeleton/LoadingPlanet";

export default function PlanetContainer({ url }: { url: string }) {
  let history = useHistory();
  const { data, isLoading, isError }: infoPlanet = usePlanet(url);

  if (isLoading) return <LoadingPlanet />;
  if (isError) return <p>Error</p>;

  const handleClick = () => {
    const partsUrl: string[] = data.date.split("-");
    const [year, month, day] = partsUrl;
    history.push(`/${year}/${day}/${month}`);
  };

  return (
    <Planet
      url={data.url}
      title={data.title}
      date={data.date}
      type={data.media_type}
      handleClick={handleClick}
    />
  );
}
