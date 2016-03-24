$(function() {

  var position1 = 5
  var position2 = -5

  $(window).scroll(function() {
    position1 = -$(this).scrollTop() * 2
    $('#balloon1').css({
      'transform' : 'translateY(' + position1.toString() + 'px)'
    });
    position2 = $(this).scrollTop() * 1.5
    $('#balloon2').css({
      'transform' : 'translateY(' + position2.toString() + 'px)'
    });
  //   $('#balloon3').css({
  //     'transform' : 'translateY(' + position2.toString() + 'px)'
  //   });
  //   position2 -= 1;
  //   $('#balloon4').css({
  //     'transform' : 'translateY(' + position2.toString() + 'px)'
  //   });
  //   position2 -= 1;
  });

  $('#balloon1').click(function(){
    console.log("click");
    $('#balloon1').css({
      'transform' : 'translateY(200px)'
    });
  });



});

