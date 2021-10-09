//Dependencies
import { SWRConfig } from "swr";
import fetcher from "./services/fetcher";

//Provider
import { PlanetaryContextProvider } from "./providers/PlanetaryContext";

//Components
import PlanetaryList from "./components/layouts/PlanetaryList/PlanetaryList";

function App() {
  return (
    <PlanetaryContextProvider>
      <SWRConfig value={{ fetcher, suspense: true }}>
        <PlanetaryList />
      </SWRConfig>
    </PlanetaryContextProvider>
  );
}

export default App;
