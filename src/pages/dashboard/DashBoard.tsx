import { NavigationToolbar } from "../../components/navigationToolbar/NavigationToolbar";
import { StatsModule } from "../../components/statsModule/StatsModule";
import { TotalBalance } from "../../components/totalBalance/TotalBalance";
import { TransactionList } from "../../components/transactionList/TransactionList";
import styles from "./DashBoard.module.scss";

export const DashBoard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <TotalBalance />
      <NavigationToolbar />
      <StatsModule />
      <TransactionList />
    </div>
  );
};
