// PART 1 QUESTION 1

var submit = document.getElementById("submit");

submit.onclick = function(){
    // Get input values
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var postal = document.getElementById("postal").value;

    // Valid input check
    var valid = true;

    // Regular expression checks for input
    var emailReg = /[\w+\W+][\@]\w+[\.]\w+/.test(email); 
    var phoneReg = /\d{3}[- ]?\d{3}[- ]?\d{4}/.test(phone);
    var postalReg = /[a-zA-Z]{1}\d{1}[a-zA-Z]{1}[- ]?\d{1}[a-zA-Z]{1}\d{1}/.test(postal);

    if (name=='') {
        alert("Must include a name");
        valid = false;
    }
    if (age<1||age>120) {
        alert("Must be an age between 0 and 120");
        valid = false;
    }
    if (!emailReg) {
        alert("Must include a valid email");
        valid = false;
    }
    if (!phoneReg) {
        alert("Must include a valid phone number");
        valid = false;
    }
    if (!postalReg) {
        alert("Must include a valid postal code");
        valid = false;
    }

    if (valid == true) {
        alert("Form validated")
    }
}
