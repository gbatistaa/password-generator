import "./App.css";
import { useState, createContext } from "react";
import { CharTypesProvider } from "./CharTypesContext.js";
import GeneratorButton from "./Components/GeneratorButton";
import Strength from "./Components/Strength";
import Including from "./Components/Including";
import RangeLength from "./Components/RangeLength.js";

export const LengthContext = createContext();
export const StrengthContext = createContext();

function App() {
  const [lengthRange, setLengthRange] = useState(6);
  const [strengthState, setStrengthState] = useState(0);

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
            <StrengthContext.Provider
              value={{ strengthState, setStrengthState }}
            >
              <RangeLength />
              <Including />
              <Strength />
              <GeneratorButton />
            </StrengthContext.Provider>
          </LengthContext.Provider>
        </CharTypesProvider>
      </div>
    </div>
  );
}

export default App;
