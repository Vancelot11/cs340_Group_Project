/*
document.getElementById("Submit") = function getUserInput() {
    console.log("Post success!");
    var userxml = new XMLHttpRequest()
    userxml.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    userxml.open("POST", "resources/insert/User", true);
    userxml.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Success!");
        } else {
            console.log("Fail!");
        }
    }
    var newUser = {
        "fname": document.getElementById("fname").value,
        "lname": document.getElementById("lname").value,
        "userName": document.getElementById("Username").value,
        "pass": document.getElementById("password").value,
    };
    userxml.send(JSON.stringify(newUser));
}
*/
function getUserInput() {
    var insXml = new XMLHttpRequest();

    insXml.open("POST", "resources/insert/user-info", true);
    insXml.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    var newUser = {
        "fname": document.getElementById("fname").value,
        "lname": document.getElementById("lname").value,
        "userName": document.getElementById("username").value,
        "pass": document.getElementById("pass").value
    };

    insXml.send(JSON.stringify(newUser));
}