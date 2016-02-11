/*$(document).ready(function(){*/

  function move(fromElement1, toElement2) {
    var pos = startPos(fromElement1);
    endPos(pos, toElement2);
  };

  function startPos(x) {
    var element = document.getElementById(x);
    return element.innerHTML;
  };

  function endPos(newPos, x) {
    var go = document.getElementById(x);
    go.innerHTML = newPos;
  };

  $('.death-star').click(function(){
    $(this).fadeOut(0);
    /*add move function here*/
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
/*});
*/
