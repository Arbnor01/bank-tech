const Account = require('./account');

describe('Account', () => {
  it('should deposit the specified amount and update the balance', () => {
    const account = new Account();
    const depositDate1 = new Date(2023, 0, 10);
    account.deposit(1000, depositDate1);
    const expectedDate1 = depositDate1.toLocaleDateString('en-GB');
    expect(account.transactions[0].date.toLocaleDateString('en-GB')).toEqual(expectedDate1);
    expect(account.transactions[0]).toEqual({ date: depositDate1, credit: 1000, balance: 1000 });

    const depositDate2 = new Date(2023, 0, 13);
    account.deposit(2000, depositDate2);
    const expectedDate2 = depositDate2.toLocaleDateString('en-GB');
    expect(account.transactions[1].date.toLocaleDateString('en-GB')).toEqual(expectedDate2);
    expect(account.transactions[1]).toEqual({ date: depositDate2, credit: 2000, balance: 3000 });
  });

  it('should debit the specified amount and update the balance', () => {
    const account = new Account();
    const depositDate = new Date(2023, 0, 10);
    account.deposit(1000, depositDate);
    const debitDate = new Date(2023, 0, 14);
    account.debit(500, debitDate);
    const expectedDate = debitDate.toLocaleDateString('en-GB');
    expect(account.transactions[1].date.toLocaleDateString('en-GB')).toEqual(expectedDate);
    expect(account.transactions[1]).toEqual({ date: debitDate, credit: '', debit: 500, balance: 500 });
  });

  it('should print the statement with the correct format', () => {
    const account = new Account();
    const depositDate1 = new Date(2023, 0, 10);
    account.deposit(1000, depositDate1);
    const depositDate2 = new Date(2023, 0, 13);
    account.deposit(2000, depositDate2);
    const debitDate = new Date(2023, 0, 14);
    account.debit(500, debitDate);
  
    // Capture the console output
    const consoleOutput = [];
    const originalLog = console.log;
    console.log = jest.fn((...args) => {
      consoleOutput.push(...args);
      originalLog(...args);
    });
  
    // Call the printStatement method
    account.printStatement();
  
    // Restore the console.log function
    console.log = originalLog;
  
    // Assert the expected output against the actual output
    expect(consoleOutput).toEqual([
      'Date || Credit || Debit || Balance',
      '14/01/2023 ||  || 500.00 || 2500.00',
      '13/01/2023 || 2000.00 ||  || 3000.00',
      '10/01/2023 || 1000.00 ||  || 1000.00',
    ]);
  });
});






