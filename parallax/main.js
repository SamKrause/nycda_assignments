$(function() {

  $(window).scroll(function() {
    position1 = $(this).scrollTop() * 1.2;
    position2 = -$(this).scrollTop() * 1.5;
    position3 = $(this).scrollTop() * 2;
    position4 = -$(this).scrollTop() *3;
    position5 = $(this).scrollTop() * 4;

    $('#balloon1').css({
      'transform' : 'translateY(' + position1.toString() + 'px)'
    });

    $('#balloon2').css({
      'transform' : 'translateY(' + position2.toString() + 'px)'
    });

    $('#balloon3').css({
      'transform' : 'translateY(' + position3.toString() + 'px)'
    });

    $('#balloon4').css({
      'transform' : 'translateY(' + position4.toString() + 'px)'
    });

    $('#balloon5').css({
      'transform' : 'translateY(' + position5.toString() + 'px)'
    });
  });


});

