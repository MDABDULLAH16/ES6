function bankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit(deposit) {
      balance += deposit;
      console.log(`balance after deposit ${balance}`);
    },
    withdraw(withdraw) {
      if (balance > withdraw) {
        balance -= withdraw;
        console.log(`balance after withdraw: ${balance}`);
      } else {
        console.log("insufficient balance: ", balance);
      }
    },
  };
}

const bank = bankAccount(100);
bank.deposit(50);
bank.withdraw(30);
