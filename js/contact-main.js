$(document).ready(function(){	
	$('#location-detail').hide();
	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: 48.466, lng: -123.304},
		    zoom: 8
		  });
		}
		window.onerror = function() {
	    $('#map').hide();
			$('#location-detail').show();
		};
});