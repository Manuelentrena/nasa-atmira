// Dependencies
import { Suspense, lazy } from "react";
import createListUrls from "../../../utils/createListUrls";
// Components
import LoadingSkeleton from "../../common/Skeleton/LoadingSketeon";
// LazyLoad
const PlanetContainer = lazy(
  () => import("../../common/Planet/PlanetContainer")
);

export default function PlanetaryList() {
  return (
    <>
      {createListUrls().map((url: string) => (
        <Suspense fallback={<LoadingSkeleton />}>
          <PlanetContainer key={url} url={url} />
        </Suspense>
      ))}
    </>
  );
}
