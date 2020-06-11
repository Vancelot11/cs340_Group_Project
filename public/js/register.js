function getUserInput()
{
	var insXml = new XMLHttpRequest();

	insXml.open("POST", "resources/insert/User", true);
	insXml.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	var newUser = {
		"fname"		:	document.getElementById("fname").value,
		"lname"		:	document.getElementById("lname").value,
		"userName"	:	document.getElementById("username").value,
		"pass"		:	document.getElementById("pass").value
	};

	insXml.send(JSON.stringify(newUser));
}
