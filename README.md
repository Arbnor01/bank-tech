# Banking Application

This is a simple banking application that allows users to interact with their bank accounts. The application provides features to make deposits, withdrawals, and generate account statements.

## Features

- **Deposit:** Users can make deposits to their bank account by specifying the amount and date.
- **Withdrawal:** Users can make withdrawals from their bank account by specifying the amount and date.
- **Account Statement:** Users can generate an account statement that shows a list of their transactions, including dates, credit amounts, debit amounts, and the current balance.

## Technologies Used

- JavaScript
- Node.js

## Installation

To use the banking application, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies by running the following command:

```shell
npm install
```

## Usage

Once the application is installed, you can run it using the following command:

```shell
node account.js
```

When the application is running, you can interact with it through the command-line interface (CLI) to make deposits, withdrawals, and generate account statements.

### Loading the Account Class in Node.js REPL

To load the Account class in the Node.js REPL, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the directory where your project files are located.
3. Launch the Node.js REPL by running the node command.
4. In the Node.js REPL, load the Account class by using the require function and providing the file path of the account.js file.
5. Assuming the account.js file is in the same directory as your current location, you can require it as follows:
```shell
const Account = require('./account');
```

Note that you need to provide the correct relative path to the account.js file if it is located in a different directory.

### Interacting with the Banking Application

After loading the Account class in the Node.js REPL, you can use the following instructions to interact with your banking application:

1. Create a new instance of the Account class:
``` shell
const account = new Account();
```
This will create a new account object that you can use to perform banking operations.

2. Perform Deposits:
To make a deposit, use the deposit method of the account object. The deposit method takes two parameters: the amount to deposit and the date of the deposit.

```shell
account.deposit(amount, date);
```
Replace amount with the desired deposit amount and date with the date of the deposit in the format new Date(year, month, day).

3. Perform Withdrawals:
To make a withdrawal, use the debit method of the account object. The debit method takes two parameters: the amount to withdraw and the date of the withdrawal.

```shell
account.debit(amount, date);
```
Replace amount with the desired withdrawal amount and date with the date of the withdrawal in the format new Date(year, month, day).

4. Generate Account Statement:
To generate an account statement, use the printStatement method of the account object.
```shell
account.printStatement();
```
This will display the statement in the console, showing the transactions in reverse chronological order, including the date, credit amount, debit amount, and the current balance.



