$(document).ready(function(){
  function displayTime() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();
    var currentMiliSeconds = currentTime.getMilliseconds();

    $('#hours').text(currentHours);
    $('#minutes').text(formatMinAndSec(currentMinutes));
    $('#seconds').text(formatMinAndSec(currentSeconds));
    $('#miliseconds').text(currentMiliSeconds);

  ifMinOdd(currentMinutes);
  AmPm(currentHours);

  };

  function AmPm(time) {
    if (time > 12) {
      time = (time - 12);
      $('#ampm').text('PM');
    } else {
      $('#ampm').text('AM');
    }
  };

  function formatMinAndSec(MinSec){
    if (MinSec < 10) {
    return '0' + MinSec;
   } else {
    return MinSec;
   }
  };

  function ifMinOdd(min){
    if (min % 2 === 0) {
      $('#minutes').css('color', 'red');
    } else if (min % 2 !== 0) {
      $('#minutes').css('color', 'black');
    }
  };

  function randomColor(){
    Math.floor((Math.random() * 10) + 1);

  };

  var number = Math.floor((Math.random() * 10) + 1);
  console.log(number);

  window.setInterval(displayTime, 1);
});

