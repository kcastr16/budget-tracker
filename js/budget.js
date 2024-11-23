class Budget {
    incomeList;
    expenseList;
    total;

    constructor(incomeList, expenseList, total) {
        this.incomeList = incomeList;
        this.expenseList = expenseList;
        this.total = total;
    }

    addIncome(income) {
        this.incomeList.push(income);
    }


    addExpense(expense) {
        this.expenseList.push(expense)
    }

    calculateBudget() {
        this.total = 
    }

    
}