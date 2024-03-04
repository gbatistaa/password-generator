import "./App.css";
import GeneratorButton from "./Components/GeneratorButton";
import Strength from "./Components/Strength";
import Including from "./Components/Including";

function App() {
  return (
    <div className="App">
      <p className="title">Passsword Generator</p>
      <div className="password-space"></div>
      <div className="password-settings">
        <div className="length-info">
          <p className="mini-name">Caracther length</p>
          <p className="length-number">10</p>
        </div>
        <input type="range" className="length-range" />
        <Including />
        <Strength />
        <GeneratorButton />
      </div>
    </div>
  );
}

export default App;
