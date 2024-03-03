import styles from "./Style/Strength.module.css";

function Strength() {
  return (
    <div className={styles.strengthInfoDiv}>
      <p className={styles.nameInfo}>STRENGTH</p>
      <div className={styles.levelDiv}>
        <p className={styles.strengthLevel}>WEAK</p>
        <div className={styles.barsDiv}>
          <div className={styles.levelBar}></div>
          <div className={styles.levelBar}></div>
          <div className={styles.levelBar}></div>
          <div className={styles.levelBar}></div>
        </div>
      </div>
    </div>
  );
}

export default Strength;
