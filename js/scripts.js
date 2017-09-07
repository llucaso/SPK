$(document).ready(function() { 

// $('.carousel').carousel({
//   interval: 5000
// });


var interval = 3500;
$.fn.carousel.Constructor.TRANSITION_DURATION = interval - 5000;
elem.carousel({
    interval : interval
});





});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});
