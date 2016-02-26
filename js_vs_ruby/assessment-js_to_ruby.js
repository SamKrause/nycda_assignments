/*
  Convert the following from javascript to ruby
*/

// a function that takes a word and capitalizes all the letters
function bigLetters(word) {
   return word.toUpperCase();
};

// a function that controls a television
//  input is what you want the tv to do ex. "volume up"
//  tvStatus is "on" or "off"
function remoteControl(tvStatus, input){
  var output = ""

  if (tvStatus == "off") {
    output = "The TV is off. Turn the TV on first.";
  } else {
    if (input == "turn on") {
      output = "The TV is now on."
    } else if (input == "turn off") {
      output = "The TV is now off."
    } else {
      output = "TV input: " + input
    }
  }

  return output
};

console.log(bigLetters("word"));

console.log(remoteControl("off", "turn on"));
console.log(remoteControl("on", "turn on"));
console.log(remoteControl("on", "turn off"));
console.log(remoteControl("on", "channel up"));
