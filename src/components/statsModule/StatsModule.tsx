import styles from "./StatsModule.module.scss";

export const StatsModule = () => {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.totalUsers}>
        <h3>Total Users</h3>
        <p>202K</p>
      </div>
      <div className={styles.totalUnits}>
        <h3>Total UNITS</h3>
        <p>1,456</p>
      </div>
      <div className={styles.unitPrice}>
        <h3>Unit Price</h3>
        <p>1 USD</p>
      </div>
    </div>
  );
};
