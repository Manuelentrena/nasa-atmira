//Dependencies
import { SWRConfig } from "swr";
import fetcher from "../services/fetcher";

//Components
import PlanetList from "../components/layouts/PlanetList/PlanetList";
import Footer from "../components/common/Footer/Footer";

export default function Home() {
  return (
    <>
      <h1>Header</h1>
      <SWRConfig value={{ fetcher, suspense: true }}>
        <PlanetList />
      </SWRConfig>
      <Footer />
    </>
  );
}
