$(document).ready(function () {

  // JQueryUI - Scripts

  $(function () {
    $("#datepicker").datepicker();
  });

  // Navigation Bar - Change Active

  $('.nav-menu li a').click(function(){
    if ($(this).hasClass('active') == false) {
      $('.nav-menu li a.active').removeClass('active');
      $(this).addClass('active');
    }
  });

});
