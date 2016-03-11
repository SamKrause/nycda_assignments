class HomeController < ApplicationController
  def index
    @boat = Boat.new
  end
end
