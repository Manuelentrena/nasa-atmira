import getPlanetaryService from "./services/getPlanetary";

function App() {
  getPlanetaryService(0);

  return <div className="App">{/* <p>{$D}</p> */}</div>;
}

export default App;
