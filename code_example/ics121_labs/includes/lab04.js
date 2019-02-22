// PART 1 QUESTION 1

var str = prompt("Please enter a string: "); 
var letter = prompt("Please enter a letter to search for: ");
var arr = str.split('');

var myButton = document.getElementById("myButton");

myButton.onclick = function(){

    var charCount = 0;
    for (var i=0;i < arr.length; ++i) {
        if (arr[i] == letter) {
            ++charCount;
            arr.splice(i,1);
            --i;
        }
    }


    var newArr = arr.toString();
    newArr = newArr.replace(/,/g, '');


    document.getElementById("part1q1").innerHTML = 
        ("<span class=\"boldText\">The string is: </span>" + str + "<BR /><BR />" + 
        "<span class=\"boldText\">The letter is: </span>" + letter + "<BR /><BR />" + 
        "The character " + letter + " occurs " + charCount + " times in the array." + "<BR /><BR />" + 
        "<span class=\"boldText\">The new string is: </span>" + newArr);
}

// PART 1 QUESTION 2

var numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
var suits = ["Hearts","Spades","Clubs","Diamonds"];

function randCard(numbers, suits) {
    var randNum = numbers[Math.floor(Math.random() * numbers.length)];
    var randSuit = suits[Math.floor(Math.random() * suits.length)];
    var str = randNum + " of " + randSuit;
    return str;
}

document.getElementById("part1q2").innerHTML = 
        ("<span class=\"boldText\">Card 1 is: </span>" + randCard(numbers, suits) + "<BR /><BR />" +
        "<span class=\"boldText\">Card 2 is: </span>" + randCard(numbers, suits));



// PART 2 QUESTION 1

var addRow = document.getElementById("addRow");

addRow.onclick = function() {
    var table = document.getElementById("sampleTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}