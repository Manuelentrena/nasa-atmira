// Components
import LoadingSkeleton from "../Skeleton/LoadingSketeon";
// Hooks
import usePlanet from "../../hooks/usePlanet";
// Types
import { infoPlanet } from "../../../types/types";

export default function DetailInfoContainer({ url }: { url: string }) {
  const { data, isLoading, isError }: infoPlanet = usePlanet(url);

  if (isLoading) return <LoadingSkeleton />;
  if (isError) return <p>Error</p>;

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
}
