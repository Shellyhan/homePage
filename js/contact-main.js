$(document).ready(function(){	
	// google map
		var map;
		function initMap() {
			var uluru = {lat: 48.466, lng: -123.304};
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: uluru,
		    zoom: 8
		  });
		}
});