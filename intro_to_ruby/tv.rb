class Tv
  attr_accessor :power, :channel, :volume, :mute

  def initialize
    @channel = 1
    @power = "off"
    @volume = 11
    @mute = "unmute"
    puts "The tv is off.  After you power it on, you can watch, change the channel, change the volume, or mute the tv."
  end

  def power on_off
    if on_off.downcase == "on"
      @power = "on"
      puts "Click ... You just turned on the tv"

    elsif on_off.downcase == "off"
      @power = "off"
      puts "Click ... the tv just turned off."

    else
      puts "The power button can only be turned to on or off."
    end
  end

  def channel input
    if @power == "on"
      if input.to_s.downcase == "up"
        @channel += 1 unless @channel == 100
        puts "Click ... the tv is now on channel #{@channel}."

      elsif input.to_s.downcase == "down"
        @channel -= 1 unless @channel == 1
        puts "Click ... the tv is now on channel #{@channel}."

      elsif input.to_i >= 1 && input.to_i <= 100
        @channel = input
        puts "Click ... the tv is now on channel #{@channel}."

      else
        puts "The channel button can only go up, down or to a specific channel between 1 and 100."
      end

    else
      puts "The tv is off.  Your have to turn it on to change the channel."
    end
  end

  def mute input
    if @power == "on"
      if input.downcase == "mute"
        @mute = "mute"
        puts "The tv is now muted"

      elsif input.downcase == "unmute"
        @mute = "unmute"
        puts "The tv has been unmuted and the volume is now at #{@volume}."

      else
        puts "The mute button can only be set to mute or unmute"
      end

    else
      puts "The tv is off.  The mute button doesn't do anything while the tv is off."
    end
  end

  def volume input
    input = input.to_s
    if @power == "on"
      if input.downcase == "up"
        if @mute == "mute"
          @mute = "unmute"
          puts "The tv has been unmuted by pressing the volume button."
        end
        @volume += 1 unless @volume == 32
        puts "The volume is now set at " + volume_level

      elsif input.downcase == "down"
        if @mute == "mute"
          @mute = "unmute"
          puts "The tv has been unmuted by pressing the volume button."
        end
        @volume -= 1 unless @volume == 1
        puts "The volume is now set at " + volume_level

      else
        puts "the volume can only go up and down from 1 to 32."
      end

    else
      puts "The tv is off.  The tv has to be on to change the volume."
    end
  end

  def volume_level
    if @volume >= 1 && @volume <= 10
      return "#{@volume}, so the sound is pretty quite."

    elsif @volume > 10 && @volume <= 21
      return "#{@volume}, so the sound level is moderate."

    elsif @volume > 21 && @volume <= 30
      return "#{@volume}, so the sound is loud."

    else
      return "#{@volume}, so the sound is extremely loud!"
    end
  end

  def watch
    if @power == "on"
      if @mute == "mute"
        puts "You are watching channel #{@channel}, but you cannot hear anything because it is muted."

      else
        puts "You are watching channel #{@channel} and the volume is at " + volume_level
      end

    else
      puts "You are just watching a black screen. The tv is off."
    end
  end

end
