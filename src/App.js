import "./App.css";
import TourManager from "./Component/TourManager/TourManager";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TourManager></TourManager>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h2>Welcome to the Complete Tour Package Manager</h2>
      <h3>Select your desired tour packages upto your budget</h3>
      <h3>Estimated Budget: $12000</h3>
    </div>
  );
}

export default App;
