import "./App.css";
import { useState } from "react";
import GeneratorButton from "./Components/GeneratorButton";
import Strength from "./Components/Strength";
import Including from "./Components/Including";

function App() {
  const [lengthRange, setLengthRange] = useState(0);
  const [lengthPercentage, setLengthPercentage] = useState(0);

  const handleRangeInputChange = (e) => {
    e.preventDefault();

    const range = e.target;
    const min = range.min;
    const max = range.max;
    const passwordLength = range.value;
    setLengthRange(passwordLength);
    const percentage = ((passwordLength - min) * 100) / (max - min);
    setLengthPercentage(percentage);
  };

  return (
    <div className="App">
      <p className="title">Passsword Generator</p>
      <div className="password-space"></div>
      <div className="password-settings">
        <div className="length-info">
          <p className="mini-name">Caracther length</p>
          <p className="length-number">{lengthRange}</p>
        </div>
        <input
          type="range"
          className="length-range"
          min="0"
          max="25"
          value={lengthRange}
          style={{ backgroundSize: `${lengthPercentage}% 100%` }}
          onChange={(e) => handleRangeInputChange(e)}
        />
        <Including />
        <Strength />
        <GeneratorButton />
      </div>
    </div>
  );
}

export default App;
