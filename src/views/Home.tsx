//Dependencies
import { SWRConfig } from "swr";
import fetcher from "../services/fetcher";

//Components
import PlanetaryList from "../components/layouts/PlanetaryList/PlanetaryList";

export default function Home() {
  return (
    <>
      <h1>Header</h1>
      <SWRConfig value={{ fetcher, suspense: true }}>
        <PlanetaryList />
      </SWRConfig>
      <h2>Footer</h2>
    </>
  );
}
