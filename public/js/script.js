const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

var dropdown = document.getElementsByClassName("sort-dropdown");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

var insXml = new XMLHttpRequest();

insXml.open("POST", "resources/insert/User", true);
insXml.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
var newUser = {
	"fname"		:	"thisisafirstname",
	"lname"		:	"thisismylastname",
	"userName"	:	"fullusername",
	"pass"		:	"supersecurepassword"
};

insXml.send(JSON.stringify(newUser));

var upXml = new XMLHttpRequest();

upXml.open("POST", "resources/update/User/userName/fullusername", true);
upXml.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
var update = { "pass": "aBetterPassword" };

upXml.send(JSON.stringify(update));
