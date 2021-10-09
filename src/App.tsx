//Dependencies
import { SWRConfig } from "swr";
import fetcher from "./services/fetcher";

//Provider
import { PlanetaryContextProvider } from "./providers/PlanetaryContext";

//Components
import RouterComponent from "./routes/RouterComponent";

function App() {
  return (
    <PlanetaryContextProvider>
      <SWRConfig value={{ fetcher, suspense: true }}>
        <RouterComponent />
      </SWRConfig>
    </PlanetaryContextProvider>
  );
}

export default App;
