import Expense from "./expense.js";
import Income from "./income.js";

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

    getTotal() {
        return this.total;
    }

    calculateBudget() {
        
        let totalIncome = 0
        this.incomeList.forEach(income => {
            totalIncome += income.incomeAmount;
        }) 

        let totalExpense = 0
        this.expenseList.forEach(expense => {
            totalExpense += expense.expenseAmount;
        }) 

        this.total = totalIncome - totalExpense;
        return this.total;
    }

    
}

export default Budget;