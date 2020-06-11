console.log("dit me")
const p = new URLSearchParams(window.location.search);
var userxml = new XMLHttpRequest()
userxml.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		const user = JSON.parse(this.responseText)
		populateUser(user);
	}
};

userxml.open("GET", "resources/User/", true);
userxml.send();

function populateUser(user) {
	for (i = 0; i < user.length; i++) {
		console.log(user[i])
        var div = `
         <h3 class="login-title">Welcome</h3>
        <table>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Password</th>
        </tr>
        <tr>
            <td>${user[i].fname}</td>
            <td>${user[i].lname}</td>
            <td>${user[i].Username}</td>
        </tr>
         </table>
		`
		document.getElementById("userSect").innerHTML += div;
	}
}