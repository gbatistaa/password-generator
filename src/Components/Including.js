import styles from "./Style/Including.module.css";
import { useCharTypes } from "../CharTypesContext.js";

function Including() {
  const { userIncludings, dispatch } = useCharTypes();

  const includes = [
    "Include Upper Case Letters",
    "Include Lower Case Letters",
    "Include Numbers",
    "Include Symbols",
  ];

  const names = ["upper", "lower", "numbers", "symbols"];

  const handleLabelClick = (event) => {
    event.preventDefault();
    const { name, checked } = event.target.firstChild;
    dispatch({ type: `set ${name}`, value: !checked });
  };

  const typeDivs = includes.map((inludingName, index) => {
    return (
      <div className={styles.divType}>
        <label
          className={`${styles.pseudoCheck} ${
            userIncludings[`${names[index]}`] ? styles.checked : ""
          }`}
          onClick={(e) => handleLabelClick(e)}
        >
          <input
            type="checkbox"
            className={styles.typeCheck}
            name={`${names[index]}`}
            checked={userIncludings[`${names[index]}`]}
          />
        </label>
        <p className={styles.typeName}>{inludingName}</p>
      </div>
    );
  });

  return <div className={styles.caracthersType}>{typeDivs}</div>;
}

export default Including;
