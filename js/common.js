/**
* Page Loader
*/
$(window).load(function() {
  'use strict';
  $(".loader-item").delay(700).fadeOut();
  $("#pageloader").delay(1200).fadeOut("slow");
});


/* ==============================================
Parallax Calling
=============================================== */


(function($) {
  'use strict';
  $(document).ready(function(){
  $(window).bind('load', function () {
      parallaxInit();
      //console.log('window load');
    });
    function parallaxInit() {
      testMobile = isMobile.any();
      if (testMobile == null || testMobile == false)
      {
        $('.home').parallax("-50%", 0.5);
      }
    };
    //console.log('document ready');
    parallaxInit();
  });

  //Mobile Detect
  var testMobile;
  var isMobile = {
      Android: function() {
          return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
          return navigator.userAgent.match(/IEMobile/i);
      },
      Touch: function() {
        return Modernizr.touch;
      },
      WinTabletIE : function() {
        //alert(navigator.userAgent.toLowerCase().indexOf("windows nt"));
        //alert(navigator.userAgent.toLowerCase().indexOf("touch"));
        return (navigator.userAgent.toLowerCase().indexOf("windows nt") != -1 && navigator.userAgent.toLowerCase().indexOf("touch") != -1);
      },
      WinTablet : function(){
        return (navigator.userAgent.toLowerCase().indexOf("windows nt") != -1 && Modernizr.touch.toString() == 'true');
      },
      any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()) || isMobile.WinTabletIE() || isMobile.WinTablet();
      }
  };
}(jQuery));



/* ==============================================
Home Super Slider (images)
=============================================== */
/**/
 $('.slides_fade').superslides({
    animation: 'fade',
    play : false
});

 /*
 * Google ma and address change
 **/
 function changeLocation(location) {
  var addressToShow = '.' + location;
  var linkToActive = '.' + location + '-link';
  $('.loc').addClass('hidden');
  $('.contact-locations li a').removeClass('active');
  $(addressToShow).removeClass('hidden');
  $(linkToActive).addClass('active');
 }