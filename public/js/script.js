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

var xml = new XMLHttpRequest();

xml.open("POST", "resources/insert/User", true);
xml.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
var newUser = {
	"fname"		:	"thisisafirstname",
	"lname"		:	"thisismylastname",
	"userName"	:	"fullusername",
	"pass"		:	"supersecurepassword"
};

xml.send(JSON.stringify(newUser));
