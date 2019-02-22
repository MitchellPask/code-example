//get 3 nums
var num1 = parseInt(prompt("Please enter a number:"));
var num2 = parseInt(prompt("Please enter a number:"));
var num3 = parseInt(prompt("Please enter a number:"));
var midVal = 0;
//find mid
midVal = num1+num2+num3 - Math.min(num1, num2, num3) - Math.max(num1, num2, num3);
//output mid
document.getElementById("middle").innerHTML = "The middle number of (" + num1 + "," + num2 + "," + num3 + ") is: <span class=\"boldred\">" + midVal + "</span>";
                                                                                                                    
//get percentage

var grade = parseInt(prompt("Please give a percentage from 0-100:"));

switch (true) {
    case(grade<0):
        document.getElementById("grade").innerHTML = "Incorrect - not between 0-100";
    break;

    case(grade<50):
        document.getElementById("grade").innerHTML = "The letter grade for " + grade + "% is: <span class=\"boldred\">F</span>";
    break;

    case(grade<65):
        document.getElementById("grade").innerHTML = "The letter grade for " + grade + "% is: <span class=\"boldred\">D</span>";
    break;

    case(grade<80):
        document.getElementById("grade").innerHTML = "The letter grade for " + grade + "% is: <span class=\"boldred\">C</span>";
    break;

    case(grade<90):
        document.getElementById("grade").innerHTML = "The letter grade for " + grade + "% is: <span class=\"boldred\">B</span>";
    break;

    case(grade<100):
        document.getElementById("grade").innerHTML = "The letter grade for " + grade + "% is: <span class=\"boldred\">A</span>";
    break;

    default:
        document.getElementById("grade").innerHTML = "Incorrect - not between 0-100";
}

//pyramid
var k = "# ";
for(var i=0;i<6;i++) {
	for (var j=0;j<i;j++) {
  document.getElementById("display").innerHTML += k;
  }
  document.getElementById("display").innerHTML +="<BR />";
}

for(i=4;i>0;i--) {
	for (j=0;j<i;j++) {
  document.getElementById("display").innerHTML += k;
  }
  document.getElementById("display").innerHTML +="<BR />";
}

//smog
var bkArea = 125000;
var smogGrow = 0.06;
var currFog = 100;
var minutes = 0;
var halfCity = false;

while(currFog < bkArea) {
    currFog += smogGrow * currFog;
    minutes++;
    if (currFog >= bkArea / 2 && !halfCity) {
        var halfMin = minutes;
        halfCity = true;
    }
}

document.getElementById("smog").innerHTML += "Fully envelop Bangkok in MINUTES: " + minutes;
document.getElementById("smog").innerHTML +="<BR />";
document.getElementById("smog").innerHTML += "Half envelop Bangkok in MINUTES: " + halfMin;