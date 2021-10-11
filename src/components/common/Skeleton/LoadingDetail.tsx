import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function LoadingDetail() {
  return (
    <div className="loadingDetail">
      <SkeletonTheme color="#7a7a7a" highlightColor="#c8c8c8">
        <div className="loadingDetail2">
          <Skeleton className="skeleton" height={50} width={350} />
          <Skeleton className="skeleton" height={250} width={500} />
          <Skeleton className="skeleton" height={40} width={300} />
          <Skeleton className="skeleton" height={400} width={500} />
          <Skeleton className="skeleton" height={25} width={500} />
          <Skeleton className="skeleton" height={25} width={500} />
        </div>
      </SkeletonTheme>
    </div>
  );
}
