def add_america(a)
  america = "Only in America!"
  a + america
end

def highest_value(array)
highest = 0
  for i in array
    if i > highest
      highest = i
    end
  end
  puts highest
end

array = [1, 5, 20, 2, 100, 3]

highest_value array

relationship = [:Father, :Mother, :Daughter]
name = ["Sam", "Molly", "Samantha"]

def create_hash(relationship, name)
hash = {}
  relationship.each_with_index do |v, i|
    hash2 = {v => name[i]}
    hash.merge! hash2
  end
  puts hash
end

create_hash(relationship, name)

def fizz_buzz
  for i in 1..100
    if (i % 3 === 0) && (i % 5 === 0)
      puts "FizzBuzz"
    elsif i % 3 === 0
      puts "Fizz"
    elsif i % 5 === 0
      puts "Buzz"
    else
      puts "#{i}"
    end
  end
end

fizz_buzz
