//Provider
import { PlanetaryContextProvider } from "./providers/PlanetaryContext";

//Components
import RouterComponent from "./routes/RouterComponent";

function App() {
  return (
    <PlanetaryContextProvider>
      <RouterComponent />
    </PlanetaryContextProvider>
  );
}

export default App;
