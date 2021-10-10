//Dependencies
import { SWRConfig } from "swr";
import fetcher from "../services/fetcher";

// Components
import PlanetDetail from "../components/layouts/PlanetDetail/PlanetDetail";
import Footer from "../components/common/Footer/Footer";
import Header from "../components/common/Header/Header";

export default function Detail() {
  return (
    <>
      <Header />
      <SWRConfig value={{ fetcher }}>
        <PlanetDetail />
      </SWRConfig>
      <Footer />
    </>
  );
}
