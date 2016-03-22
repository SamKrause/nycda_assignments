
function Countdown(number) {
  for (var i = 1; i <= number; i++) {
    Fibonacci([i])
    var sequence = Fibonacci([i]);
    console.log(sequence);
  };
};

function Fibonacci(number) {
  if (number <= 2) {
    return 1;
  };

  return Fibonacci(number - 1) + Fibonacci(number - 2);
};

Countdown(10);
