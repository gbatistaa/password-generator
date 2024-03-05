import "./App.css";
import { useState, createContext } from "react";
import { CharTypesProvider } from "./CharTypesContext.js";
import { passwordStrengthLogic } from "./logic.js";
import GeneratorButton from "./Components/GeneratorButton";
import Strength from "./Components/Strength";
import Including from "./Components/Including";
import RangeLength from "./Components/RangeLength.js";

export const LengthContext = createContext();

function App() {
  const [lengthRange, setLengthRange] = useState(6);

  return (
    <div className="App">
      <p className="title">Passsword Generator</p>
      <div className="password-space"></div>
      <div className="password-settings">
        <div className="length-info">
          <p className="mini-name">Caracther length</p>
          <p className="length-number">{lengthRange}</p>
        </div>
        <CharTypesProvider>
          <LengthContext.Provider value={{ lengthRange, setLengthRange }}>
            <RangeLength />
          </LengthContext.Provider>
          <Including />
          <Strength />
          <GeneratorButton />
        </CharTypesProvider>
      </div>
    </div>
  );
}

export default App;
