import { useCharTypes } from "../CharTypesContext.js";
import { useContext, useState, useEffect } from "react";
import { LengthContext, StrengthContext } from "../App.js";
import { passwordStrengthLogic } from "../logic.js";

function RangeLength() {
  const { lengthRange, setLengthRange } = useContext(LengthContext);
  const { setStrengthState } = useContext(StrengthContext);
  const { userIncludings } = useCharTypes();
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

  useEffect(() => {
    const currentStrength = passwordStrengthLogic(userIncludings, lengthRange);
    setStrengthState(currentStrength);
  }, [userIncludings, lengthRange, setStrengthState]);

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
