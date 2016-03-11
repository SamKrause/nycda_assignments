var cookie_array = ["sugar", "chocolate", "lemon"]
// var sugar_amount = 0
// var chocolate_amount = 0
// var lemon_amount = 0

everything("sugar");
everything("chocolate");
everything("lemon");

// for (var i = 0; i < cookie_array.length; i++) {
//   setCounter(cookie_array[i], cookie_array[i] + "_amount");
//   cookieCount(cookie_array[i], "#" +cookie_array[i] + "-counter");
//   order(cookie_array[i])
// };
function everything(type, amount) {
  setCounter(type, amount);
  cookieCount(type, "#" +type + "-counter");
  order(type);
  clearCounter(type, amount);
};

function cookieCount(type, counter){
  count = Cookies.get(type);
  $(counter).html(count);
};

function setCounter(type, number) {
  if (!Cookies.get(type)) {
    Cookies.set(type, 0)
  };
};

function order(type) {
  $('#' + type + '-img').click(function() {
  increase = Number(Cookies.get(type)) + 1;
  console.log(increase);
  Cookies.set(type, increase);
  cookieCount(type, "#" + type + "-counter");
  });
};

function clearCounter(type) {
  $('.clear-button').click(function() {
    Cookies.set(type, 0);
    cookieCount(type, "#" + type + "-counter");
  });
};

