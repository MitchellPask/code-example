
// PART 1 QUESTION 1

var str = prompt("please enter a string:");
var letter = prompt("please enter a letter to search for:");
document.getElementById("part1q1").innerHTML = ("<span class=\"lab3titles\">Part 1 Question 1</span><BR /><BR />");
document.getElementById("part1q1").innerHTML += ("<span class=\"boldText\">The string is: </span>" + str + "<BR /><BR />The letter '" + letter +"' appears " + letterCount(str, letter) + " times.");

function letterCount(str, letter) {
    var charCount = 0;
    for (var i=0;i < str.length; ++i){
        if (str.charAt(i) == letter)
            ++charCount;
    }
    return charCount;
}

//PART 1 QUESTION 2

document.getElementById("part1q2").innerHTML = ("<span class=\"lab3titles\">Part 1 Question 2</span><BR /><BR />");

var workMonth = parseInt(prompt("Please enter the month worked: "));
var workYear = parseInt(prompt("Please enter the year: "));
var wage = parseFloat(prompt("Please submit a wage amount: "));

var day = new Date(workYear, workMonth, 0);
var month = daysInMonth(workMonth, workYear);
var count = 0;
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
} 

for(var i=0; i<month; i++){
    if (day.getDay() != 0 && day.getDay() != 6) {
        count++;
    }
    day.setDate(i+1);
}

var pay = wage * parseFloat((count*7.5));
document.getElementById("part1q2").innerHTML += ("Month: " + months[workMonth - 1] + "<BR />" + 
                                                "Year: " + workYear + "<BR />" + 
                                                "Weekdays: " + count + "<BR />" +
                                                "Salary: $" + wage.toFixed(2) + "<BR />" +
                                                "Pay: $" + pay.toFixed(2));

// PART 2 QUESTION 1

document.getElementById("part2q1").innerHTML = ("<span class=\"lab3titles\">Part 2 Question 1</span><BR /><BR />");

var investment1 = 10;
var annualRate1 = 4;
var years1 = 5;
var investment2 = 30;
var annualRate2 = 8;
var years2 = 3;
var investment3 = 0;
var annualRate3 = 4;
var years3 = 5;

document.getElementById("part2q1").innerHTML += ("The future value is: " + calcFutureValue(investment1,annualRate1,years1) + "<BR /><BR />" +
                                                "The future value is: " + calcFutureValue(investment2,annualRate2,years2) + "<BR /><BR />" +
                                                "The future value is: " + calcFutureValue(investment3,annualRate3,years3));

function calcFutureValue(principal, rate, years) {
    try {
        if (principal <= 0) throw new Error("Principal value must be greater than zero");
    console.log("principal is > 0");
    } catch (e) {
        if (e.message == "Principal value must be greater than zero");
            return document.getElementById("part2q1").innerHTML = ("ERROR: Principal value must be greater than zero");
    }
    try {
        if (rate <= 0) throw new Error("Rate value must be greater than zero");
    console.log("rate is > 0");
    } catch (e) {
        if (e.message == "Rate value must be greater than zero");
            return document.getElementById("part2q1").innerHTML = ("ERROR: Rate value must be greater than zero");
    }
    try {
        if (years <= 0) throw new Error("Years value must be greater than zero");
    console.log("years is > 0");
    } catch (e) {
        if (e.message == "Years value must be greater than zero");
            return document.getElementById("part2q1").innerHTML = ("ERROR: Years value must be greater than zero");
    }

    var monthlyRate = (rate / 12) / 100;
    var months = years * 12;
    var futureValue = 0;

    for (var i=0;i<months;i++) {
        futureValue = (futureValue + principal) * (1 + monthlyRate);
    }
    return futureValue.toFixed(2);
}