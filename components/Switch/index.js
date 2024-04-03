import styles from "./switch.module.css";

export function Switch({ isOn, toggleSwitch }) {
  return (
    <div
      className={`${styles["toggle-switch"]} ${isOn ? "" : styles.active}`}
      onClick={toggleSwitch}
    >
      <div className={styles.switch}></div>
    </div>
  );
}
