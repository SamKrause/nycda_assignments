
everything("sugar");
everything("chocolate");
everything("lemon");

function everything(type) {
  setCounter(type);
  cookieCount(type, "#" +type + "-counter");
  order(type);
  clearCounter(type);
};

function cookieCount(type, counter){
  count = Cookies.get(type);
  $(counter).html(count);
};

function setCounter(type) {
  if (!Cookies.get(type)) {
    Cookies.set(type, 0)
  };
};

function order(type) {
  $('#' + type + '-img').click(function() {
  increase = Number(Cookies.get(type)) + 1;
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

