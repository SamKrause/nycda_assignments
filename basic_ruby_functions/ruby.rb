def double_plus10(number)
  number = (number * 2) + 10
  puts number
end

def detect_pali(word)
  word = word.downcase
  word == word.reverse
end

def abbrev_state(state)
  states = {:Alabama => "AL", :Alaska => "AK", :Arizona => "AZ", :Arkansas => "AR", :California => "CA", :Colorado => "CO", :Connecticut => "CT", :Delaware => "DE", :Florida => "FL", :Georgia => "GA", :Hawaii => "HI", :Idaho => "ID", :Illinois => "IL", :Indiana => "IN", :Iowa => "IA", :Kansas => "KS", :Kentucky => "KY", :Louisiana => "LA", :Maine => "ME", :Maryland => "MD", :Massachusetts => "MA", :Michigan => "MI", :Minnesota => "MN", :Mississippi => "MS", :Missouri => "MO", :Montana => "MT", :Nebraska => "NE", :Nevada => "NV", :"New_Hampshire" => "NH", :"New Jersey" => "NJ", :"New Mexico" => "NM", :"New York" => "NY", :"North Carolina" => "NC", :"North Dakota" => "ND", :Ohio => "OH", :Oklahoma => "OK", :Oregon => "OR", :Pennsylvania => "PA", :"Rhode Island " => "RI", :"South Carolina" => "SC", :"South Dakota" => "SD", :Tennessee => "TN", :Texas => "TX", :Utah => "UT", :Vermont => "VT", :Virginia => "VA", :Washington => "WA", :"West Virginia" => "WV", :Wisconsin => "WI", :Wyoming => "WY"}
  puts states[state.to_sym]
end

