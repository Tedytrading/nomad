import styles from "./totalBalance.module.scss";

export const TotalBalance = () => {
  return (
    <div className={styles.totalBalanceContainer}>
      <h2>Total Balance</h2>
      <h1>1000.01</h1>
      <p>UNITS</p>
    </div>
  );
};
