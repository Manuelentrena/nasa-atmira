//Dependencies
import createListUrls from "../../../utils/createListUrls";

//Components
import Planetary from "../../common/Planetary/Planetary";

export default function PlanetaryList() {
  return (
    <>
      {createListUrls().map((url: string) => (
        <Planetary key={url} url={url} />
      ))}
    </>
  );
}
