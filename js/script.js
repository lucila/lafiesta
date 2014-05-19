$(document).ready(function() {

	// Contact Maps
	$("#maps").gmap3({
		map: {
			options: {
			  center: [-34.7182547,-58.2418187],
			  zoom: 15,
			  scrollwheel: true
			}
		 },
		marker:{
			latLng: [-34.7229329,-58.24066],
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
