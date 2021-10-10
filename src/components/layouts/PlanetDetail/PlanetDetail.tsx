// Dependencies
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
// Utils
import createDate from "../../../utils/createDate";
import createUrl from "../../../utils/createUrl";
// Components
import DetailInfoContainer from "../../common/Detail/DetailInfoContainer";

export default function PlanetDetail() {
  const [url, setUrl] = useState<string | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setUrl(createUrl(createDate(pathname)));
  }, [pathname]);

  return <div>{url && <DetailInfoContainer url={url} />}</div>;
}
