import Expense from "./Expense.js";
import Income from "./income.js";

// EventListeners
let addIncome = document.getElementById('income-submit').addEventListener('click', userIncome);
let addExpense = document.getElementById('expense-submit').addEventListener('click', userExpenses);

// Variables
let incomeList = [];
let expenseList = [];
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
    let incomeAmount = incomeAmountElement.value;
    let income = new Income (incomeName, incomeAmount); //Adds user value to Income object
    let incomeTotalDisplay = document.getElementById('income-display');
    //adds income to inomeList array
    incomeList.push(income);
    let incomeFloat = parseFloat(income.incomeAmount)
    incomeTotal = incomeFloat + incomeTotal;
    //console.log(incomeTotal);

    incomeTotalDisplay.textContent = `Your Income: $${incomeTotal.toFixed(2)}`; //Adds incomeTotal to display in the HTML
    //creates HTML elements to display income name, and amount.
    let incomeData = document.getElementById('income-container');
    const addIncomeElement = document.createElement('div');
    addIncomeElement.innerHTML= `
    <h2>${income.incomeName}</h2>
    <p>$${incomeFloat.toFixed(2)}</p>
    `    
    incomeData.appendChild(addIncomeElement)
    displayTotal();
}

// Captures user input for expense name and expense amount
function userExpenses() {

    if (!checkExpenseInput()) {
        return;
    }

    let expenseName = expenseNameElement.value; //Gets user input
    let expenseAmount = expenseAmountElement.value; // Gets user input
    let expense = new Expense (expenseName, expenseAmount); // Adds user value to Expense object
    let expenseTotalDisplay = document.getElementById('expense-display');
    expenseList.push(expense);
    let expenseFloat = parseFloat(expense.expenseAmount)
    expenseTotal = expenseFloat + expenseTotal;
    //console.log(expenseTotal);

    let expenseData = document.getElementById('expense-container');
    const addExpenseElement = document.createElement('div');
    addExpenseElement.innerHTML= `
    <h2>${expense.expenseName}</h2>
    <p>$${expenseFloat.toFixed(2)}</p>
    `    
    expenseData.appendChild(addExpenseElement)

    expenseTotalDisplay.textContent = `Your Expenses: $${expenseTotal.toFixed(2)}`;
    displayTotal();
}


/* displaytotal {
    total = incomeTotal - expenseTotal
    totaldisplay = display total on display id in html
} */
function displayTotal() {
    let total = incomeTotal - expenseTotal;
    let totalDisplay = document.getElementById('total-display');
    totalDisplay.textContent = `Your Total: $${total.toFixed(2)}`;
}


//Validates user input for income. Even if edited with inspect, keeps user from adding values that are not appropriate.
function checkIncomeInput() {
    const validation = document.getElementById('validation-income');
    const incNameValidation = document.getElementById('validation-inc_name');
    if (incomeNameElement.value === '' || incomeAmountElement.value === '')  {  
        validation.innerHTML = '';
        incNameValidation.innerHTML = '';
        const validationMsg = document.createElement('div');
        const incNameValidationMsg = document.createElement('div');
        if (incomeNameElement.value === '') {

            validationMsg.innerHTML = `
            <p>please input a name.</p> 
            `
            validation.appendChild(validationMsg);
        } 
        if (incomeAmountElement.value === '') {
            incNameValidationMsg.innerHTML = `
            <p>Please input a amount.</p>`

            incNameValidation.appendChild(incNameValidationMsg);
        }

        return false;
    } else {
        validation.innerHTML = '';
        incNameValidation.innerHTML = '';
        let parsedInput = parseFloat(incomeAmountElement.value);
        if (isNaN(parsedInput)) {
            return false;
        }
        return true;
    }
}

function checkExpenseInput() {
    const validation = document.getElementById('validation-expense');
    if (expenseNameElement.value === '' || expenseAmountElement.value === '')  {
        validation.innerHTML = '';
        const validationMsg = document.createElement('div');
        validationMsg.innerHTML = `
        <p>please input a name</p> 
        `
        validation.appendChild(validationMsg);
        return false;
    } else {
        let parsedInput = parseFloat(expenseAmountElement.value);
        if (isNaN(parsedInput)) {
            return false;
        }
        return true;
    }
}






