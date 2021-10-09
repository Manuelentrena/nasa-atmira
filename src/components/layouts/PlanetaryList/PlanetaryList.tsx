//Dependencies
import React, { Suspense } from "react";
import createListUrls from "../../../utils/createListUrls";
//Components
import LoadingSkeleton from "../../common/Skeleton/LoadingSketeon";
//LazyLoad
const Planetary = React.lazy(() => import("../../common/Planetary/Planetary"));

export default function PlanetaryList() {
  return (
    <>
      {createListUrls().map((url: string) => (
        <Suspense fallback={<LoadingSkeleton />}>
          <Planetary key={url} url={url} />
        </Suspense>
      ))}
    </>
  );
}
