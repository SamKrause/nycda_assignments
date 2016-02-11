$(document).ready(function(){
  function move(fromElement1, toElement2) {
    var pos = startPos(fromElement1);
    endPos(pos, toElement2);
  };

  $('.death-star').click(function(){
    $(this).fadeOut(0);
  });

  $('.blast').click(function() {
    $(".b1").animate( {
      opacity: '1',
      left:'1500px',
    }, 2000);
    $(".b2").animate( {
      opacity: '1',
      left:'-500px',
    }, 2000);
    $(".b3").animate( {
      opacity: '1',
      left:'1500px',
      top:'100px'
    }, 2000);
    $(".b4").animate( {
      opacity: '1',
      top:'-50px',
    }, 2000);
    $(".b5").animate( {
      opacity: '1',
      top:'1500px',
    }, 2000);
    $(".b6").animate( {
      opacity: '1',
      left:'-500px',
      top:'-100px',
    }, 2000);
    $(".b7").animate( {
      opacity: '1',
      left:'1500px',
      top:'1500px'
    }, 2000);
    $(".b9").animate( {
      opacity: '1',
      left:'-500px',
      top:'1500px'
    }, 2000);
  });
)};
