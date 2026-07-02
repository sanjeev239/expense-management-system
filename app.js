function toggleTheme(){
document.body.classList.toggle("dark-mode");
}

let expenses =
JSON.parse(localStorage.getItem("expenses")) || [];

function saveExpense(){

let title =
document.getElementById("title").value;

let amount =
document.getElementById("amount").value;

let category =
document.getElementById("category").value;

expenses.push({
title,
amount,
category
});

localStorage.setItem(
"expenses",
JSON.stringify(expenses)
);

alert("Expense Saved");

document.getElementById("expenseForm").reset();
}