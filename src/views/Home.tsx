//Dependencies
import { SWRConfig } from "swr";
import fetcher from "../services/fetcher";

//Components
import PlanetList from "../components/layouts/PlanetList/PlanetList";
import Footer from "../components/common/Footer/Footer";
import Header from "../components/common/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <SWRConfig value={{ fetcher, suspense: true }}>
        <PlanetList />
      </SWRConfig>
      <Footer />
    </>
  );
}
