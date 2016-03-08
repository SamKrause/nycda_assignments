array = [1, 300, 50, 30, 5, 99, 73]
largest_number = 0

function highestNumber(array){
  for (var i = 0; i <= array.length; i++)
    if (array[i] > largest_number) {
      largest_number = array[i]
    };
  console.log(largest_number);
  return (largest_number);
};

console.log(highestNumber(array))

