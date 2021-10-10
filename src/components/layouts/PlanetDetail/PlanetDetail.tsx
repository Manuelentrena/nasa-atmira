import { useEffect } from "react";
import usePlanet from "../../hooks/usePlanet";
import { useLocation } from "react-router";

export default function PlanetDetail() {
  const { pathname } = useLocation();
  const { getDetail } = usePlanet();

  useEffect(() => {
    pathname && getDetail(pathname);
  }, [getDetail, pathname]);

  return (
    <div>
      <h1>container</h1>
    </div>
  );
}
