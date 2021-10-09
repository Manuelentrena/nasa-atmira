//Dependencies
import React, { Suspense } from "react";
import createListUrls from "../../../utils/createListUrls";
//Components
import LoadingSkeleton from "../../common/Skeleton/LoadingSketeon";
//LazyLoad
const PlanetaryContainer = React.lazy(
  () => import("../../common/Planetary/PlanetaryContainer")
);

export default function PlanetaryList() {
  return (
    <>
      {createListUrls().map((url: string) => (
        <Suspense fallback={<LoadingSkeleton />}>
          <PlanetaryContainer key={url} url={url} />
        </Suspense>
      ))}
    </>
  );
}
