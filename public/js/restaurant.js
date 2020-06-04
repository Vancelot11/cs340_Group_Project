const p = new URLSearchParams(window.location.search);

var xml = new XMLHttpRequest();

xml.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		const results = JSON.parse(this.responseText)
		populate(results);
	}
};

rid = p.get("rid")
console.log(rid)
xml.open("GET", "resources/Menu/rid/" + rid, true);
xml.send();

function populate(results) {
	for(i = 0; i < results.length; i++) {
		console.log(results[i])
		var div = `
        <h2 class="title">Menu</h2>
        <div class="body-menu">
            <div class="menu-image">
                    <div class="menu-images"><img src="${results[i].image}" width="250px"> </div>
                    <div class="menu-info">Name:${results[i].name} </div>
					<div class="menu-info">Day: ${results[i].days}</div>
					<div class="menu-info">Hours: ${results[i].start} - ${results[i].stop}</div>
            <div class="menu-images">
                   <img src="${results[i].image}" width="250px">
                </div>
            <div class="menu-images">
                   <img src="${results[i].image}" width="250px">
                </div>
            <div class="menu-images">
                   <img src="${results[i].image}" width="250px">
                </div>
            <div class="menu-images">
                   <img src="${results[i].image}" width="250px">
                </div>
            </div>
        </div>
		`
		document.getElementById("menuSect").innerHTML += div;
	}
}
