import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function LoadingPlanet() {
  return (
    <SkeletonTheme color="#7a7a7a" highlightColor="#c8c8c8">
      <div className="loadingPlanet">
        <Skeleton className="skeleton" height={25} width={350} />
        <Skeleton className="skeleton" height={292} width={500} />
        <Skeleton className="skeleton" height={15} width={500} />
      </div>
    </SkeletonTheme>
  );
}
