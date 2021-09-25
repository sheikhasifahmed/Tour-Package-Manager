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
    <div>
      <h1>Welcome to the Complete Tour Package Manager</h1>
    </div>
  );
}

export default App;
