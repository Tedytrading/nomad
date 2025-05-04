import styles from "./NavigationToolbar.module.scss";
import withdraw from "../../assets/withdraw.svg";
import topUp from "../../assets/topUp.svg";

export const NavigationToolbar = () => {
  return (
    <div className={styles.navigation}>
      <button className={styles.topUpButton}>
        TOP UP
        <img src={topUp} />
      </button>
      <button className={styles.withdrawButton}>
        WITHDRAW
        <img src={withdraw} />
      </button>
    </div>
  );
};
