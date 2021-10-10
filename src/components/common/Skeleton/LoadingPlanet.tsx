import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function LoadingPlanet() {
  return (
    <SkeletonTheme color="#202020" highlightColor="#444">
      <div className="loadingPlanet">
        <Skeleton className="skeleton" height={25} width={350} delay={1} />
        <Skeleton className="skeleton" height={292} width={500} delay={1} />
        <Skeleton className="skeleton" height={15} width={500} delay={1} />
      </div>
    </SkeletonTheme>
  );
}
