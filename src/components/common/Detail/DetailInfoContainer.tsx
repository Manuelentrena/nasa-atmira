// Components
import LoadingDetail from "../Skeleton/LoadingDetail";
import DetailInfo from "./DetailInfo";
// Hooks
import usePlanet from "../../hooks/usePlanet";
// Types
import { infoPlanet } from "../../../types/types";

export default function DetailInfoContainer({ url }: { url: string }) {
  const { data, isLoading, isError }: infoPlanet = usePlanet(url);

  if (isLoading) return <LoadingDetail />;
  if (isError) return <p>Error</p>;

  return (
    <DetailInfo
      url={data.url}
      title={data.title}
      date={data.date}
      type={data.media_type}
      desc={data.explanation}
      copy={data.copyright}
      hdurl={data.hdurl}
    />
  );
}
