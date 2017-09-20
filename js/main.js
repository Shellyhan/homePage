$(document).ready(function(){

//scroll display animation:
	function isElementInViewport (el) {

	    //special bonus for those using jQuery
	    if (typeof jQuery === "function" && el instanceof jQuery) {
	        el = el[0];
	    }

	    var rect = el.getBoundingClientRect();

	    return (
	        rect.top >= 0 &&
	        rect.left >= 0 &&
	        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
	        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
	    );

	}

	var isAnimated = false;
	window.onscroll = function(){
  	if(isElementInViewport($('#intro')) && !isAnimated){

		    $('.type-it').typeIt({
			    speed: 50,
			    deleteSpeed: 200,
			    lifeLike: true,
			    autoStart: false,
			    breakLines: true
			  })
			  .tiType('So, what is she doing recently...')
			  .tiSettings({speed: 900})
			  .tiType('? ')
			  .tiBreak()
			  .tiSettings({speed: 30})
			  .tiType('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Just finished school from SFU&nbsp;&nbsp;')
			  .tiDelete(5)
			  .tiType('Simon Fraser University.')
			  .tiBreak()
			  .tiType('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Recently moved to a beautiful city, Victoria in BC.')
			  .tiBreak()
			  .tiType('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Currently working as a freelance developer for SCORE program in Vancouver.')
			  .tiBreak()
			  .tiType('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Surrey Collaborative Outreach and Research Experience)')
			  .tiBreak()
			  .tiType('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Volunteering in Uvic community garden weekly.')
			  .tiBreak()
			  .tiType('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;And looking for a job...');
			  isAnimated = true;
  	}
	}

	//fun things part:
	$(".fun-item").flip({
	  axis: 'x',
	  trigger: 'hover',
	  reverse: true
	});

});




