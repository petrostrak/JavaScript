const account = {
  name : 'Petros Trakadas',
  expenses : [],
  income : [],
  addIncome : function(description, amount){
    this.income.push({
      description : description,
      amount : amount
    })
  },
  addExpense : function(description, amount){
    this.expenses.push({
      description : description,
      amount : amount
    })
  },
  getAccountSummery : function(){
    let totalAmount = 0;
    let totalIncome = 0;
    let acountBalance = 0;
    this.expenses.forEach(function(expense){
      totalAmount += expense.amount;
    })
    this.income.forEach(function(income){
      totalIncome += income.amount;
    })

    acountBalance = totalIncome - totalAmount;

    return `${this.name} has a balance of ${acountBalance}. ${totalIncome} in income and ${totalAmount} in expenses`;
  }
}

// expenses --> description, amount
// addExpense --> description, amount
// getAcoountSummery --> total up all expenses -> Petros Trakadas has $1250 expenses
// add income array
// add income method -->description, totalAmount

account.addExpense('Rent', 500);
account.addExpense('Coffee', 34);
account.addExpense('Vacations', 2000);
account.addIncome('income', 1200);
account.addIncome('income', 1200);
account.addIncome('income', 1200);
//account.addExpense('Coffee', 2);
//console.log(account.getAcoountSummery());

console.log(account.getAccountSummery());
