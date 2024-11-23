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
    console.log(incomeTotal);

    incomeTotalDisplay.textContent = `Your Income: $${incomeTotal.toFixed(2)}`;
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

    let expenseName = expenseNameElement.value;
    let expenseAmount = expenseAmountElement.value;
    let expense = new Expense (expenseName, expenseAmount); // Adds user value to Expense object
    let expenseTotalDisplay = document.getElementById('expense-display');
    expenseList.push(expense);
    let expenseFloat = parseFloat(expense.expenseAmount)
    expenseTotal = expenseFloat + expenseTotal;
    console.log(expenseTotal);

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

function displayTotal() {
    let total = incomeTotal - expenseTotal;
    let totalDisplay = document.getElementById('total-display');
    totalDisplay.textContent = `Your Total: $${total.toFixed(2)}`;
}

function checkIncomeInput() {
   
    if (incomeNameElement.value === '' || incomeAmountElement.value === '')  {
        return false;
    } else {
        let parsedInput = parseFloat(incomeAmountElement.value);
        if (isNaN(parsedInput)) {
            return false;
        }
        return true;
    }
}

function checkExpenseInput() {
   
    if (expenseNameElement.value === '' || expenseAmountElement.value === '')  {
        return false;
    } else {
        let parsedInput = parseFloat(expenseAmountElement.value);
        if (isNaN(parsedInput)) {
            return false;
        }
        return true;
    }
}






