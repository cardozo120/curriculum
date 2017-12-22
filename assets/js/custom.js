(function($) {
	"use strict";

    //Left nav scroll
    $(".nano").nanoScroller();

    // Left menu collapse
    $('.left-nav-toggle a').on('click', function (event) {
        event.preventDefault();
        $("body").toggleClass("nav-toggle");
    });

	// Left menu collapse
    $('.left-nav-collapsed a').on('click', function (event) {
        event.preventDefault();
        $("body").toggleClass("nav-collapsed");
    });

	// Left menu collapse
    $('.right-sidebar-toggle').on('click', function (event) {
        event.preventDefault();
        $("#right-sidebar-toggle").toggleClass("right-sidebar-toggle");
    });

	//metis menu
   $('#menu').metisMenu({
	   triggerElement: '.nav-link',
	   parentTrigger: '.nav-item',
	   subMenu: '.nav.flex-column',
	   toggle: true
	});

    //slim scroll
    $('.scrollDiv').slimScroll({
        color: '#eee',
        size: '5px',
        height: '300px',
        alwaysVisible: false
    });

	//tooltip popover
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

		var ww = $(window).width();
		var limit = 991;

		function refresh() {
		   ww = $(window).width();
		   var w =  ww<limit ? (location.reload(true)) :  ( ww>limit ? (location.reload(true)) : ww=limit );
		}

		var tOut;
		$(window).resize(function() {
		    var resW = $(window).width();
		    clearTimeout(tOut);
		    if ( (ww>limit && resW<limit) || (ww<limit && resW>limit) ) {
		        tOut = setTimeout(refresh, 100);
		    }
		});
})(jQuery);
