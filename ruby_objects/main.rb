#Here is the calculator
class Calculator
  attr_accessor :value1
  attr_accessor :value2

  def add
    puts (@value1 + @value2)
  end

  def subtract
    puts (@value1 - @value2)
  end

  def multiply
    puts (@value1 * @value2)
  end

  def divide
    puts (@value1 / @value2)
  end
end

first = Calculator.new
first.value1 = 2
first.value2 = 10
first.add
first.multiply

second = Calculator.new
second.value1 = 50
second.value2 = 25
second.subtract
second.divide


#Here is the elevator
class Elevator
  attr_accessor :floor

  def initialize
    @floor = 1

    puts "You are on the #{@floor}st floor.  Where would you like to go?"
  end

  def self.move number
    @floor = number unless !number.integer?
  end

  def self.greet
    if @floor == 1 || @floor == -1
      puts "Hello! Thanks for riding the elevator! You are on the #{@floor}st floor.  Where would you like to go?"
    elsif @floor == 2 || @floor == -2
      puts "Hello! Thanks for riding the elevator! You are on the #{@floor}nd floor.  Where would you like to go?"
    elsif @floor == 3 || @floor == -3
      puts "Hello! Thanks for riding the elevator! You are on the #{@floor}rd floor.  Where would you like to go?"
    else
      puts "Hello! Thanks for riding the elevator! You are on the #{@floor}th floor.  Where would you like to go?"
    end
  end
end

Elevator.new


