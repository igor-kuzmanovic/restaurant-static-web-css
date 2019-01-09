$(document).ready(function () {

  // JQueryUI - Scripts

  $(function () {
    $("#datepicker").datepicker();
  });

  // Navigation Bar - Change Active

  $('.nav-menu li a').click(function () {
    if ($(this).hasClass('active') == false) {
      $('.nav-menu li a.active').removeClass('active');
      $(this).addClass('active');
    }
  });

  /* Promo section - slideshow */

  var slideIndex = 1;

  $(".slide-prev").click(function () {
    updateSlide(-1);
  });

  $(".slide-next").click(function () {
    updateSlide(1);
  });

  function updateSlide(n) {
    $("#promo .bg-image").removeClass("bg-img-" + slideIndex);
    slideIndex += n;
    if (slideIndex > 3) {
      slideIndex = 1
    } else if (slideIndex < 1) {
      slideIndex = 3
    }
    $("#promo .bg-image").addClass("bg-img-" + slideIndex);
  }

});
