import { NavigationToolbar } from "../../components/navigationToolbar/NavigationToolbar";
import { StatsModule } from "../../components/statsModule/StatsModule";
import { TotalBalance } from "../../components/totalBalance/totalBalance";
import { TransactionList } from "../../components/transactionList/TransactionList";

export const DashBoard = () => {
  return (
    <div className="dashboard">
      <TotalBalance />
      <NavigationToolbar />
      <StatsModule />
      <TransactionList />
    </div>
  );
};
