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
xml.open("GET", "resources/Restaurant/rid/" + rid, true);
xml.send();

function populate(results) {
	for(i = 0; i < results.length; i++) {
		console.log(results[i])
	}
}
