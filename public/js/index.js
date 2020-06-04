var xml = new XMLHttpRequest();

xml.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		const results = JSON.parse(this.responseText)
		populate(results);
	}
};

xml.open("GET", "resources/", true);
xml.send();

function populate(results) {
	for(i = 0; i < results.length; i++) {
		console.log(results[i])
		var div = `
			"<div class="restaurant">
				<a href = /restaurant.html?rid=${results[i].rid} class="name-restaurant">${results[i].name}</a>
				<div class="head-review">
					<img src="${results[i].image}" width="250px">
				</div>
				<div class="body-restaurant">
					<div class="restaurant-info">Business Hours: ${results[i].start} - ${results[i].stop}</div>
					<div class="restaurant-info">Attributes: ${results[i].att}</div>
					<div class="restaurant-info">Description:</div>
				</div>
			</div>
		</div>
		`
		document.getElementById("restSect").innerHTML += div;
	}
}
