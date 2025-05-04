import styles from "./TransactionList.module.scss";

export const TransactionList = () => {
  const transactions = [
    { amount: "46 UNITS", value: "166 USDC", type: "Top up", date: "25 May 25 3:30 PM" },
    { amount: "46 UNITS", value: "166 USDC", type: "Withdraw", date: "25 May 25 3:30 PM" },
    { amount: "46 UNITS", value: "166 USDC", type: "Pending", date: "25 May 25 3:30 PM" },
  ];

  const getTypeStyle = (type: string) => {
    switch (type.toLowerCase()) {
      case "top up":
        return styles.green;
      case "withdraw":
        return styles.red;
      case "pending":
        return styles.orange;
    }
  };

  return (
    <div className={styles.transactionList}>
      <h3>Transactions</h3>
      {transactions.map((transaction, index) => (
        <div key={index} className={styles.transaction}>
          <p className={styles.amount}>{transaction.amount}</p>
          <p className={styles.value}>{transaction.value}</p>
          <p className={`${styles.type} ${getTypeStyle(transaction.type)}`}>{transaction.type}</p>
          <p className={styles.date}>{transaction.date}</p>
        </div>
      ))}
    </div>
  );
};
