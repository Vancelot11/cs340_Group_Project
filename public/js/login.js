var userxml = new XMLHttpRequest()
userxml.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        const user = JSON.parse(this.responseText)
        getUser(user);
    }
};

userxml.open("GET", "resources/User/", true);
userxml.send();
function getUser(user) {
    for (i = 0; i < user.length; i++) {
        console.log(user[i])
        var div = `
        
        <div class="full-screen-container">
        <div class="login-container">
            <h3 class="login-title">Welcome Back</h3>
            <form>
                <div class="input-group">
                    <label>Username</label>
                    <input type="email">
                </div>
                <div class="input-group">
                    <label>Password</label>
                    <input type="password">
                </div>
                <button type="submit" class="login-button">Sign In</button>
            </form>
        </div>
        </div>

        
		`
        document.getElementById("loginSect").innerHTML += div;
    }
}