// Dependencies
import { useHistory } from "react-router-dom";
// Hooks
import usePlanet from "../../hooks/usePlanet";
// Componets
import Planetary from "./Planet";
import LoadingSkeleton from "../Skeleton/LoadingSketeon";

type Props = {
  url: string;
};

export default function PlanetContainer({ url }: Props) {
  let history = useHistory();
  const { data, isLoading, isError } = usePlanet(url);

  if (isLoading) return <LoadingSkeleton />;
  if (isError) return <h1>Error</h1>;

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
