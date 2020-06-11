const p = new URLSearchParams(window.location.search);
rid = p.get("rid");
console.log(rid);

var restxml = new XMLHttpRequest()
restxml.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		const restaurant = JSON.parse(this.responseText)
        populateRestaurant(restaurant);
	}
};

restxml.open("GET", "resources/Restaurant/rid/" + rid, true);
restxml.send();
function populateRestaurant(restaurant) {
		for (i = 0; i < restaurant.length; i++) {
		console.log(restaurant[i])
			var div = `
			<div class="restaurant-section">
			<div class="restaurant">
				<div class="name-restaurant">${restaurant[i].name}</a>
				<div class="head-review">
					<img src="${restaurant[i].image}" width="250px">
				</div>
				<div class="body-restaurant">
					<div class="restaurant-info">Business Hours: ${restaurant[i].start} - ${restaurant[i].stop}</div>
					<div class="restaurant-info">Attributes: ${restaurant[i].att}</div>
					<div class="restaurant-info">Description: ${restaurant[i].desc}</div>
				</div>
			</div>
		</div>
		</div>
		`
		document.getElementById("restSect").innerHTML += div;
	}
}

var menuxml = new XMLHttpRequest()
menuxml.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		const menu = JSON.parse(this.responseText)
		populateMenu(menu);
	}
};

menuxml.open("GET", "resources/Menu/rid/" + rid, true);
menuxml.send();

function populateMenu(menu) {
	for(i = 0; i < menu.length; i++) {
		console.log(menu[i])
		var div = `
        <h2 class="title">Menu</h2>
        <div class="body-menu">
            <div class="menu-image">
                    <div class="menu-images"><img src="${menu[i].image}" width="250px"> </div>
                    <div class="menu-info">Name:${menu[i].name} </div>
					<div class="menu-info">Day: ${menu[i].days}</div>
					<div class="menu-info">Hours: ${menu[i].start} - ${menu[i].stop}</div>
            <div class="menu-images">
                   <img src="${menu[i].image}" width="250px">
                </div>
            <div class="menu-images">
                   <img src="${menu[i].image}" width="250px">
                </div>
            <div class="menu-images">
                   <img src="${menu[i].image}" width="250px">
                </div>
            <div class="menu-images">
                   <img src="${menu[i].image}" width="250px">
                </div>
            </div>
        </div>
		`
		document.getElementById("menuSect").innerHTML += div;
	}
}

var revxml = new XMLHttpRequest()
revxml.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		const review = JSON.parse(this.responseText)
		populateReview(review);
	}
};

revxml.open("GET", "resources/Review/rid/" + rid, true);
revxml.send();
function populateReview(review) {
	for (i = 0; i < review.length; i++) {
		console.log(review[i])
		var div = `
		<div class="review-section">
        <h2 class="title">Reviews</h2>
            <div class="review">
                <div class="head-review">
                    <img src="${review[i].image}" width="250px">
                </div>
                <div class="body-review">
                    <div class="name-review">${review[i].userName}</div>
                    <div class="review">${review[i].rev}</div>
                    <div class="rating">${review[i].rating}</div>
                    <div class="stamp">${review[i].stamp}</div>
                </div>
            </div>
        </div>
		`
		document.getElementById("reviewSect").innerHTML += div;
	}
}
