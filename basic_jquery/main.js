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
});

