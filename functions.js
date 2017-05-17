var side = function() {
  $('.side').hide();
  $('.hamburger').show();
  $('.x-icon').hide();
  $('.hamburger').on('click', function() {
    $(this).hide(400);
    $('.x-icon').show(100);
    $('.side').fadeIn(300);
  });
  $('.x-icon').on('click', function() {
    $(this).hide(400);
    $('.hamburger').show(400);
    $('.side').fadeOut(380);
  });
}

var all = function() {
  side();
}

$(document).ready(all);
