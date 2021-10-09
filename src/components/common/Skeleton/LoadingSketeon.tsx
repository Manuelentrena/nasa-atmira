import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function LoadingSkeleton() {
  return (
    <SkeletonTheme color="#202020" highlightColor="#444">
      <Skeleton height={200} width={200} delay={1} />
    </SkeletonTheme>
  );
}
