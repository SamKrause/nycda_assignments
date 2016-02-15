$(document).ready(function(){

  $('#button').click(function(e){
    var start_number = $('#number').val();
    countDown(start_number);

    function countDown(display_number){
      if (display_number === -1 ) {
        return;
      };

      warning(display_number);
      tickTock(display_number);
      $('#display').text(display_number);
      var display_number = (display_number - 1);
      window.setTimeout(countDown, 1000, display_number);
    };

    function warning(time){
      if (time >= 60){
        $('#warning').text('You have plenty of time.').css('color', 'black');
      } else if ((time < 60) && (time > 10)){
        $('#warning').text('You have less than a minute left!');
      } else if ((time <= 10) && (time >= 1)){
        $('#warning').text('Hurry You Are Amost Out of Time!').css('color', 'red');
      } else {
        $('#warning').text('OUT OF TIME!');
      };
    };

//fixed
    function tickTock(time){
      if (time === 0){
        $('#tock').hide();
        $('#tick').hide();
      } else if (time % 2 === 0){
        $('#tick').show();
        $('#tock').hide();
      } else {
        $('#tock').show();
        $('#tick').hide();
      }
    };


  });


});
