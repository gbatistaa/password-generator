import { useContext, useEffect, useState } from "react";
import styles from "./Style/Strength.module.css";
import { StrengthContext } from "../App.js";
import { passwordStrengthColor } from "../logic.js";

function LevelBars({ color }) {
  const array = [0, 0, 0, 0];
  if (color === "#ff0000") {
    return array.map((value, index) => {
      return (
        <div
          className={styles.levelBar}
          key={index}
          style={{ backgroundColor: index === 0 ? color : "" }}
        ></div>
      );
    });
  } else if (color === "#ff7f00") {
    return array.map((value, index) => {
      return (
        <div
          className={styles.levelBar}
          key={index}
          style={{ backgroundColor: index <= 1 ? color : "" }}
        ></div>
      );
    });
  } else if (color === "#ffff00") {
    return array.map((value, index) => {
      return (
        <div
          className={styles.levelBar}
          key={index}
          style={{ backgroundColor: index <= 2 ? color : "" }}
        ></div>
      );
    });
  } else if (color === "#5ACA75") {
    return array.map((value, index) => {
      return (
        <div
          className={styles.levelBar}
          key={index}
          style={{ backgroundColor: color }}
        ></div>
      );
    });
  }
}

function Strength() {
  const { strengthState } = useContext(StrengthContext);
  const [colorState, setColorState] = useState("#ff0000");
  const [strenthText, setStrengthText] = useState("WEAK");

  const handleStrengthText = (colorState) => {
    switch (colorState) {
      case "#ff0000":
        setStrengthText("BAD");
        break;
      case "#ff7f00":
        setStrengthText("WEAK");
        break;
      case "#ffff00":
        setStrengthText("MEDIUM");
        break;
      case "#5ACA75":
        setStrengthText("STRONG");
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    setColorState(passwordStrengthColor(strengthState));
  }, [strengthState]);

  useEffect(() => {
    handleStrengthText(colorState);
  }, [colorState]);

  return (
    <div className={styles.strengthInfoDiv}>
      <p className={styles.nameInfo}>STRENGTH</p>
      <div className={styles.levelDiv}>
        <p className={styles.strengthLevel}>{strenthText}</p>
        <div className={styles.barsDiv}>
          <LevelBars color={colorState} />
        </div>
      </div>
    </div>
  );
}

export default Strength;
