import styles from "./Style/Including.module.css";

function Including() {
  return (
    <div className={styles.caracthersType}>
      <div className={styles.divType}>
        <div className={styles.pseudoCheck}></div>
        <input type="checkbox" className={styles.typeCheck} />
        <p className={styles.typeName}>Include Upper Case Letters</p>
      </div>
      <div className={styles.divType}>
        <div className={styles.pseudoCheck}></div>
        <input type="checkbox" className={styles.typeCheck} />
        <p className={styles.typeName}>Include Lower Case Letters</p>
      </div>
      <div className={styles.divType}>
        <div className={styles.pseudoCheck}></div>
        <input type="checkbox" className={styles.typeCheck} />
        <p className={styles.typeName}>Include Numbers</p>
      </div>
      <div className={styles.divType}>
        <div className={styles.pseudoCheck}></div>
        <input type="checkbox" className={styles.typeCheck} />
        <p className={styles.typeName}>Include Symbols</p>
      </div>
    </div>
  );
}

export default Including;
