//Dependencies
import { SWRConfig } from "swr";
import fetcher from "../services/fetcher";

// Components
import PlanetDetail from "../components/layouts/PlanetDetail/PlanetDetail";
import Footer from "../components/common/Footer/Footer";

export default function Detail() {
  return (
    <>
      <h1>Header</h1>
      <SWRConfig value={{ fetcher }}>
        <PlanetDetail />
      </SWRConfig>
      <Footer />
    </>
  );
}
