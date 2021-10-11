//Dependencies
import { SWRConfig } from "swr";
import fetcher from "../services/fetcher";

//Components
import PlanetList from "../components/layouts/PlanetList/PlanetList";
import Footer from "../components/common/Footer/Footer";
import Header from "../components/common/Header/Header";
import Search from "../components/common/Search/Search";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Search />
        <SWRConfig value={{ fetcher, suspense: true }}>
          <PlanetList />
        </SWRConfig>
      </div>
      <Footer />
    </>
  );
}
