var side = function() {
  $('.side').hide();
  $('.hamburger').show();
  $('.x-icon').hide();
  $('.hamburger').on('click', function() {
    $(this).hide(200);
    $('.x-icon').show(100);
    $('.side').fadeIn(300);
  });
  $('.x-icon').on('click', function() {
    $(this).hide(300);
    $('.hamburger').show(200);
    $('.side').fadeOut(150);
  });
};

var all = function() {
  side();
};

$(document).ready(all);
