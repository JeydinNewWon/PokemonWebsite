// Mobile Sidebar

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

// Review section.

var review = function() {
  $('.face').on('click', function() {
    var faceTop = $(this).position().top,
        vertMath = -1 * (faceTop - 230);

    $(this).parent().css('top', + vertMath + 'px');

    $(this).addClass('has-bubble-open');
    $(this).siblings().removeClass('has-bubble-open');
  });

  $('.face:nth-child(3)').addClass('has-bubble-open');
};

// Post icons hover-jump
var postIconJump = function() {
  $('.content-box').on("mouseenter",
  function() {
    $(this).effect("bounce", { times: 2}, 800);
  });

  $('.content').on("mouseleave", function() {
    $(this).effect("bounce", { times: 0}, 0);
  })
};


var all = function() {
  side();
  review();
};

$(document).ready(all);
