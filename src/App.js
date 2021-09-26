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
      <div>
        <h2>Welcome to the Complete Tour Package Manager</h2>
        <h3>Select your desired tour packages upto your budget</h3>
      </div>
      <div className="budget">
        <h2>Estimated Budget: $12000</h2>
      </div>
    </div>
  );
}

export default App;
