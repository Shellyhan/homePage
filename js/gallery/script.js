$(function() {
	$("#form_dialog").dialog({
		autoOpen: false,
		resizable: false,
		show: {
			effect: "clip",
			duration: 200
		},
		hide: {
			effect: "clip",
			duration: 100
		},
		width: 535,
		height: 520
	});

	$("#theme-button").offset({top: 12.5});

	/* Position Control Related */
	var numberOfImage = $("#footer li").size();
	$(window).resize(function() {
  		position();
	});
	function position(){
		$("h1").position({
			of: $("#nav"),
			my: "left+20",
			at: "left"
		});

//might need to change this location
    $("#scroll-left").position({
      of: $("#footer"),
      my: "left+20",
      at: "left",
    });

		$("#mask").position({
			of: $("#footer")
		});

		$("#scroll-right").position({
			of: $("#footer"),
			my: "right-20",
			at: "right"
		});
	}

	/* Photo Gallery Related*/
  function preload(arrayOfImages) {
      $(arrayOfImages).each(function(){
          $('<img/>')[0].src = this;
      });
  }
  var arrayOfImage = [];
  for (i = 0; i < numberOfImage; i++) {
    arrayOfImage.push('../homePage/imgs/' + (i + 1) + '.jpg');
  }

  preload(arrayOfImage);

	var updating = false;
	$(".thumbnail").on("click", function() {
		if (updating == false) {
			updating = true;
			$("#main-container").css('background-image', 'url(../homePage/imgs/' + $(this).attr('order') + '.jpg)');
			setTimeout(function(){ updating = false; }, 550);
		}
	});
//change to nailthumb plugin:
	var lis = $("li");
	for (i = 0; i < numberOfImage; i++) {
    $(lis[i]).css('background-image', 'url(../homePage/imgs/thumbnails/' + (i + 1) + '.jpg)');
	}

	var scrollSpeed = 300;
	var scrollDispl = 408;
	var scrollEase = "swing";
	$("#scroll-right").click(function() {
		$("ol").animate({
			scrollLeft: $("ol").scrollLeft() + scrollDispl
			}, scrollSpeed, scrollEase);
	});
	$("#scroll-left").click(function() {
		$("ol").animate({
			scrollLeft: $("ol").scrollLeft() - scrollDispl
			}, scrollSpeed, scrollEase);
	});

	/* High Priority */
	position();

  var i = null;
  $(document).mousemove(function() {
    clearTimeout(i);
    $('#footer').slideDown('normal');
    $('#nav').slideDown('normal');

    if (!($('#footer').is(":hover"))) {
      i = setTimeout(function(){
          $("#footer").slideUp('normal');
          $('#nav').slideUp('normal');
      }, 1000);
    }
  });

	$.widget( "custom.colorize", {
      // default options
      options: {
        red: 255,
        green: 0,
        blue: 0,

        // Callbacks
        change: null,
        random: null
      },

      // The constructor
      _create: function() {
        this.element
          // add a class for theming
          .addClass( "custom-colorize" );

        this.changer = $( "<button>", {
          text: "Change Filter",
          "id": "filter-button"
        })
        .appendTo( "#nav" )
        .button();

        // Bind click events on the changer button to the random method
        this._on( this.changer, {
          // _on won't call random when widget is disabled
          click: "random"
        });
        this._refresh();
      },

      // Called when created, and later when changing options
      _refresh: function() {
        this.element.css( "background-color", "rgb(" +
          this.options.red +"," +
          this.options.green + "," +
          this.options.blue + ", 0.1)"
        );

        // Trigger a callback/event
        this._trigger( "change" );
      },

      // A public method to change the color to a random value
      // can be called directly via .colorize( "random" )
      random: function( event ) {
        var colors = {
          red: Math.floor( Math.random() * 256 ),
          green: Math.floor( Math.random() * 256 ),
          blue: Math.floor( Math.random() * 256 )
        };

        // Trigger an event, check if it's canceled
        if ( this._trigger( "random", event, colors ) !== false ) {
          this.option( colors );
        }
      },

      // Events bound via _on are removed automatically
      // revert other modifications here
      _destroy: function() {
        // remove generated elements
        this.changer.remove();

        this.element
          .removeClass( "custom-colorize" )
          .enableSelection()
          .css( "background-color", "transparent" );
      },

      // _setOptions is called with a hash of all options that are changing
      // always refresh when changing options
      _setOptions: function() {
        // _super and _superApply handle keeping the right this-context
        this._superApply( arguments );
        this._refresh();
      },

      // _setOption is called for each individual option that is changing
      _setOption: function( key, value ) {
        // prevent invalid color values
        if ( /red|green|blue/.test(key) && (value < 0 || value > 255) ) {
          return;
        }
        this._super( key, value );
      }
    });

});
