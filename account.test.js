const Account = require('./account');

describe('Account', () => {
  it('should deposit the specified amount and update the balance', () => {
    const account = new Account();
    account.deposit(1000);
    expect(account.balance).toBe(1000);
  });
});

