$(document).ready(function() {

	// Contact Maps
	$("#maps").gmap3({
		map: {
			options: {
			  center: [-34.7214128,-58.2447557],
			  zoom: 15,
			  scrollwheel: true
			}
		 },
		marker:{
			latLng: [-34.7246272,-58.2437632],
			data: "Guido 800, Quilmes",
			options: {
			}
		 }
	});

	//Slider
	$("#slider").carousel({
		interval: 5000
	});

	$("#testi").carousel({
		interval: 4000
	});

	$("#itemsingle").carousel({
		interval: false
	});

});
