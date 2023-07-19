class Account {
    constructor() {
      this.transactions = [];// Array to store transactions
      this.balance = 0;// Current balance
    }

  
    deposit(amount, date) {
      this.balance += amount;// Update the balance
      this.transactions.push({ date, credit: amount, balance: this.balance });// Add transaction to the array
    }

    debit(amount, date) {
        this.balance -= amount;
        this.transactions.push({ date, credit: '', debit: amount, balance: this.balance });
    }
  
    formatDate(date) {
      const day = String(date.getDate()).padStart(2, '0');// Get the day of the month with leading zero
      const month = String(date.getMonth() + 1).padStart(2, '0');// Get the month (months are zero-based) with leading zero
      const year = String(date.getFullYear());
      return `${day}/${month}/${year}`;// Return formatted date string
    }
  
    printStatement() {
      console.log('Date || Credit || Debit || Balance');
      // Print transactions in reverse chronological order
      for (let i = this.transactions.length - 1; i >= 0; i--) {
        const transaction = this.transactions[i];
        const { date, credit, debit, balance } = transaction;
        const formattedDate = this.formatDate(date);
        const formattedCredit = credit ? credit.toFixed(2) : '';
        const formattedDebit = debit ? debit.toFixed(2) : '';
        console.log(`${formattedDate} || ${formattedCredit} || ${formattedDebit} || ${balance.toFixed(2)}`);
      }
    }
  }

  const account = new Account();
  account.deposit(1000, new Date(2023, 0, 10));
  account.deposit(2000, new Date(2023, 0, 13));
  account.debit(500, new Date(2023, 0, 14));
  account.printStatement();
  
  module.exports = Account;