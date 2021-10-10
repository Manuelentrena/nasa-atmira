//Dependencies
import { SWRConfig } from "swr";
import fetcher from "../services/fetcher";

// Components
import PlanetDetail from "../components/layouts/PlanetDetail/PlanetDetail";

export default function Detail() {
  return (
    <>
      <h1>Header</h1>
      <SWRConfig value={{ fetcher }}>
        <PlanetDetail />
      </SWRConfig>
      <h2>Footer</h2>
    </>
  );
}
