import { SWRConfig } from "swr";
import fetcher from "./services/fetcher";
import PlanetaryList from "./components/layouts/PlanetaryList/PlanetaryList";

function App() {
  return (
    <SWRConfig value={{ fetcher, suspense: true }}>
      <PlanetaryList />
    </SWRConfig>
  );
}

export default App;
