import styles from "./Style/Including.module.css";

function Including() {
  const includes = [
    "Include Upper Case Letters",
    "Include Lower Case Letters",
    "Include Numbers",
    "Include Symbols",
  ];

  const typeDivs = includes.map((inludingName) => {
    return (
      <div className={styles.divType}>
        <label className={styles.pseudoCheck}>
          <input type="checkbox" className={styles.typeCheck} />
        </label>
        <p className={styles.typeName}>{inludingName}</p>
      </div>
    );
  });

  return <div className={styles.caracthersType}>{typeDivs}</div>;
}

export default Including;
