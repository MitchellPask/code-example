alert ("Hello World!");
var person = prompt("Please enter your name!", "Your name here...");
var amount = parseInt(prompt("Please enter an amount:"));
var tax = parseFloat(prompt("Please enter the tax percentage:"));
var total = parseFloat(((tax / 100) * amount) + amount);
total = total.toFixed(2);