import { useContext, useState } from "react";
import { useCharTypes } from "../CharTypesContext.js";
import { passwordCreatorLogic } from "../logic.js";
import { PassowrdContext } from "../App.js";
import arrow from "../assets/arrow-right-solid.svg";
import blackArrow from "../assets/arrow-right-solid-black.svg";

function GeneratorButton() {
  const [hoverState, setHoverState] = useState(false);
  const [blockedState, setBlockedState] = useState(false);
  const { passwordState, setPasswordState } = useContext(PassowrdContext);
  const { userIncludings } = useCharTypes();
  //const { lower, upper, numbers, symbols } = userIncludings;

  const verifyEveryTypeIsFalse = (userIncludings) => {
    let everyTypeFalse = true;
    for (const type in userIncludings) {
      if (userIncludings[type]) everyTypeFalse = false;
    }
    return everyTypeFalse;
  };

  const handleHoverButtonMouseEnter = (e) => {
    e.preventDefault();
    setHoverState(true);
  };

  const handleHoverButtonMouseLeave = (e) => {
    e.preventDefault();
    setHoverState(false);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const isToBlock = verifyEveryTypeIsFalse(userIncludings);
    setBlockedState(isToBlock);
    const newPassword = passwordCreatorLogic(userIncludings);
    setPasswordState(newPassword);
  };

  return (
    <button
      type="submit"
      className={`generate-btn ${blockedState ? "no-type" : ""}`}
      onMouseEnter={(event) => handleHoverButtonMouseEnter(event)}
      onMouseLeave={(event) => handleHoverButtonMouseLeave(event)}
      onClick={(event) => handleButtonClick(event)}
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
