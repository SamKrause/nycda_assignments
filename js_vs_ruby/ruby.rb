def bigLetters word
  return word.upcase
end

def remoteControl(tvStatus, input)
  output = ""

  if tvStatus == "off"
    output = "The TV is off. Turn the TV on first."
  else
    if input == "turn on"
      output = "The TV is now on."
    elsif input == "turn off"
      output = "The TV is now off."
    else
      output = "TV input: " + input
    end
  end

  return output
end


puts bigLetters "cool"

puts remoteControl("off", "turn on")
puts remoteControl("on", "turn on")
puts remoteControl("off", "turn off")
puts remoteControl("on", "channel up")
