// object reference

let myAccount = {
  name : 'Petros',
  expenses : 0,
  income : 0
}

// addIncome
// resetAccount
// getAccountSummery

function addIncome(AccountObj, amount){
  AccountObj.income = AccountObj.income + amount;
}

function resetAcc(AccountObj){
  AccountObj.income = 0;
  AccountObj.expenses = 0;
}

function addExpense(AccountObj, amount){
  AccountObj.expenses = AccountObj.expenses + amount;
}

function getAccSummery(AccountObj){
  console.log(`The account holder with name ${AccountObj.name} has ${AccountObj.expenses} expenses and ${AccountObj.income} income.`);
}

addExpense(myAccount, 2.50);
addExpense(myAccount, 10);
addIncome(myAccount, 1200);
getAccSummery(myAccount);
resetAcc(myAccount);
getAccSummery(myAccount);
