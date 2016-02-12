$(document).ready(function(){
  function displayTime() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    AmPm(currentHours);
    if (currentHours > 12){
      currentHours = (currentHours - 12)
    };
    if (currentHours == 0){
      currentHours = 12;
    };

    $('#hours').text(currentHours);
    $('#minutes').text(formatMinAndSec(currentMinutes));
    $('#seconds').text(formatMinAndSec(currentSeconds));

  ifMinOdd(currentMinutes);
  changeColor(currentMinutes, currentSeconds);
  hourChange(currentHours);
  };

  function displayMilliSec() {
    var currentTime = new Date();
    var currentMilliseconds = currentTime.getMilliseconds();
    $('#milliseconds').text(formatMillisec(currentMilliseconds));
  };


  function hourChange(hour){
    colorArray = ['lime', 'red', 'blue', 'green', 'black', 'yellow', 'orange', 'gray', 'violet', 'brown', 'bisque', 'teal'];
    $('#hours').css('color', colorArray[hour-1]);
  };

  function AmPm(time) {
    if (time >= 12) {
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

  function formatMillisec(Millisec){
    if (Millisec < 10){
        return '00' + Millisec;
    } else if (Millisec < 100) {
      return '0' + Millisec;
    } else {
      return Millisec;
    }
  };

  function ifMinOdd(min){
    if (min % 2 === 0) {
      $('#minutes').css('color', 'red');
    } else if (min % 2 !== 0) {
      $('#minutes').css('color', 'black');
    }
  };

  function changeColor(min, sec){
    if ((min % 5 === 0) && (sec === 00)) {
      randomColor();
    }
  };

  function randomColor(){
    var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    $('#clock').css('backgroundColor', color);
  };

  window.setInterval(displayTime, 1000);
  window.setInterval(displayMilliSec, 1);
  displayTime();
  randomColor();

});



