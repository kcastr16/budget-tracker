import Budget from "./budget.js";
import Expense from "./expense.js";
import Income from "./income.js";

// EventListeners
let addIncome = document.getElementById('income-submit').addEventListener('click', userIncome);
let addExpense = document.getElementById('expense-submit').addEventListener('click', userExpenses);

// Variables
let budget = new Budget([], [], 0);
let incomeTotal = 0.0;
let expenseTotal = 0.0;

// Elements
let incomeNameElement = document.getElementById('income-name');
let incomeAmountElement = document.getElementById('income-amount');
let expenseNameElement = document.getElementById('expense-name');
let expenseAmountElement = document.getElementById('expense-amount');

// Captures user input for income name and income amount
function userIncome() {
    if (!checkIncomeInput()) {
        return;
    }

    let incomeName = incomeNameElement.value;
    let incomeAmount = parseFloat(incomeAmountElement.value);
    let income = new Income(incomeName, incomeAmount); // Adds user value to Income object
    budget.addIncome(income); // Adds income to the budget

    let incomeTotalDisplay = document.getElementById('income-display');
    let incomeFloat = parseFloat(income.incomeAmount)
    incomeTotal = incomeFloat + incomeTotal;
    //console.log(incomeTotal);

    incomeTotalDisplay.textContent = `Your Income: $${incomeTotal.toFixed(2)}`; //Adds incomeTotal to display in the HTML
    //creates HTML elements to display income name, and amount.
    let incomeData = document.getElementById('income-container');
    const addIncomeElement = document.createElement('div');
    addIncomeElement.innerHTML = `
    <h2>${income.incomeName}</h2>
    <p>$${incomeAmount.toFixed(2)}</p>
    `;
    incomeData.appendChild(addIncomeElement);
    displayTotal();

}

// Captures user input for expense name and expense amount
function userExpenses() {
    if (!checkExpenseInput()) {
        return;
    }

    let expenseName = expenseNameElement.value;
    let expenseAmount = parseFloat(expenseAmountElement.value);
    let expense = new Expense(expenseName, expenseAmount); // Adds user value to Expense object
    budget.addExpense(expense); // Adds expense to the budget

    let expenseTotalDisplay = document.getElementById('expense-display');
    let expenseFloat = parseFloat(expense.expenseAmount)
    expenseTotal = expenseFloat + expenseTotal;
    expenseTotalDisplay.textContent = `Your Expenses: $${expenseTotal.toFixed(2)}`;

    let expenseData = document.getElementById('expense-container');
    const addExpenseElement = document.createElement('div');
    addExpenseElement.innerHTML = `
    <h2>${expense.expenseName}</h2>
    <p>$${expenseAmount.toFixed(2)}</p>
    `;
    expenseData.appendChild(addExpenseElement);
    displayTotal();
}


/* displaytotal {
    total = incomeTotal - expenseTotal
    totaldisplay = display total on display id in html
} */
    function displayTotal() {
        budget.calculateBudget();
        let totalDisplay = document.getElementById('total-display');
        totalDisplay.textContent = `Your Total: $${budget.getTotal().toFixed(2)}`;
    }



//ALL THIS STUFF BELOW STAYS!!!

//Validates user input for income. Even if edited with inspect, keeps user from adding values that are not appropriate.
function checkIncomeInput() {
    const validation = document.getElementById('validation-income');
    const incNameValidation = document.getElementById('validation-inc_number');
    validation.innerHTML = '';
    incNameValidation.innerHTML = '';
    const validationMsg = document.createElement('div');
    const incNameValidationMsg = document.createElement('div');
    
    if (incomeNameElement.value === '' || incomeAmountElement.value === '')  {  
        if (incomeNameElement.value === '') {

            validationMsg.innerHTML = `
            <p>Please input a name.</p> 
            `
            validation.appendChild(validationMsg);
        } 
        if (incomeAmountElement.value === '') {
            incNameValidationMsg.innerHTML = `
            <p>Please input a valid amount.</p>`

            incNameValidation.appendChild(incNameValidationMsg);
        } else if(parseFloat(incomeAmountElement.value) <= 0){
            incNameValidationMsg.innerHTML = `<p>Please input a amount.</p>`
            incNameValidation.appendChild(incNameValidationMsg);
        }

        return false;
    } else {
        let parsedInput = parseFloat(incomeAmountElement.value);
        if (isNaN(parsedInput)  || parsedInput <= 0) {
            incNameValidationMsg.innerHTML = `<p>Please input a amount.</p>`
            incNameValidation.appendChild(incNameValidationMsg);
            return false;
        }
        return true;
    }
}


// validates expense input for if empty, it will not let you add anything. 
function checkExpenseInput() {
    const expNameValidation = document.getElementById('validation-exp_name');
    const expAmountValidation = document.getElementById('validation-expense');
    expNameValidation.innerHTML = '';
    expAmountValidation.innerHTML = '';
    const expNameValidationMsg = document.createElement('div');
    const expAmountValidationMsg = document.createElement('div');

    if (expenseNameElement.value === '' || expenseAmountElement.value === '')  {
        if (expenseNameElement.value === '') {

            expNameValidationMsg.innerHTML = `
            <p>Please input a name.</p> 
            `
            expNameValidation.appendChild(expNameValidationMsg);
        } 
        if (expenseAmountElement.value === '') {

            expAmountValidationMsg.innerHTML = `
            <p>Please input a valid amount.</p> 
            `
            expAmountValidation.appendChild(expAmountValidationMsg);
        } else if (parseFloat(expenseAmountElement.value) <= 0){
            expAmountValidationMsg.innerHTML = `<p>Please input a valid amount.</p>`
            expAmountValidation.appendChild(expAmountValidationMsg);
        }

        return false;
    } else {
        let parsedInput = parseFloat(expenseAmountElement.value);
        if (isNaN(parsedInput) || parseFloat(expenseAmountElement.value) <= 0 ) {
            expAmountValidationMsg.innerHTML = `
            <p>Please input a Valid Amount.</p> 
            `
            expAmountValidation.appendChild(expAmountValidationMsg);
            return false;
        }
        return true;
    }
}






