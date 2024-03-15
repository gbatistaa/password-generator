import "./App.css";
import { useState, createContext } from "react";
import copy from "./assets/icon-copy.svg";
import { CharTypesProvider } from "./CharTypesContext.js";
import GeneratorButton from "./Components/GeneratorButton";
import Strength from "./Components/Strength";
import Including from "./Components/Including";
import RangeLength from "./Components/RangeLength.js";

export const LengthContext = createContext();
export const StrengthContext = createContext();
export const PassowrdContext = createContext();

function App() {
  const copyToClipboard = (e, texto) => {
    e.preventDefault();
    navigator.clipboard
      .writeText(texto)
      .then(function () {
        console.log("Texto copiado para a área de transferência!");
      })
      .catch(function (error) {
        console.error("Erro ao copiar texto: ", error);
      });
  };

  const [lengthRange, setLengthRange] = useState(6);
  const [strengthState, setStrengthState] = useState(0);
  const [passwordState, setPasswordState] = useState("");

  return (
    <div className="App">
      <p className="title">Passsword Generator</p>
      <div className="password-space">
        <p className="password-text">{passwordState}</p>
        <button
          className="copy-button"
          onClick={(event) => copyToClipboard(event, passwordState)}
        >
          <img src={copy} alt="copy-icon" />
        </button>
      </div>
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
              <PassowrdContext.Provider
                value={{ passwordState, setPasswordState }}
              >
                <GeneratorButton />
              </PassowrdContext.Provider>
            </StrengthContext.Provider>
          </LengthContext.Provider>
        </CharTypesProvider>
      </div>
    </div>
  );
}

export default App;
