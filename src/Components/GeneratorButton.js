import { useState } from "react";
import { useCharTypes } from "../CharTypesContext.js";
import arrow from "../assets/arrow-right-solid.svg";
import blackArrow from "../assets/arrow-right-solid-black.svg";

function GeneratorButton() {
  const [hoverState, setHoverState] = useState(false);
  const { userIncludings } = useCharTypes();
  const { lower, upper, numbers, symbols } = userIncludings;

  const handleHoverButtonMouseEnter = (e) => {
    e.preventDefault();
    setHoverState(true);
  };

  const handleHoverButtonMouseLeave = (e) => {
    e.preventDefault();
    setHoverState(false);
  };

  return (
    <button
      type="submit"
      className="generate-btn"
      onMouseEnter={(event) => handleHoverButtonMouseEnter(event)}
      onMouseLeave={(event) => handleHoverButtonMouseLeave(event)}
    >
      GENERATE
      <img
        src={hoverState ? blackArrow : arrow}
        alt="arrow"
        className="arrow-btn"
      />
    </button>
  );
}

export default GeneratorButton;
