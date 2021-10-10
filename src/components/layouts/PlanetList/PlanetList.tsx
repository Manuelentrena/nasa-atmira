// Dependencies
import { Suspense, lazy } from "react";
import createListUrls from "../../../utils/createListUrls";
// Components
import LoadingPlanet from "../../common/Skeleton/LoadingPlanet";
// LazyLoad
const PlanetContainer = lazy(
  () => import("../../common/Planet/PlanetContainer")
);

export default function PlanetList() {
  return (
    <div className="planetList">
      {createListUrls().map((url: string) => (
        <Suspense fallback={<LoadingPlanet />}>
          <PlanetContainer key={url} url={url} />
        </Suspense>
      ))}
    </div>
  );
}
