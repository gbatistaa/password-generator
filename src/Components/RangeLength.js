import { useCharTypes } from "../CharTypesContext.js";
import { useContext, useState } from "react";
import { LengthContext } from "../App.js";

function RangeLength() {
  const { lengthRange, setLengthRange } = useContext(LengthContext);
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
    <input
      type="range"
      className="length-range"
      min="6"
      max="25"
      value={lengthRange}
      style={{ backgroundSize: `${lengthPercentage}% 100%` }}
      onChange={(e) => handleRangeInputChange(e)}
    />
  );
}

export default RangeLength;
