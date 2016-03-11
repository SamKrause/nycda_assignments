class User < ActiveRecord::Base
  def access
    "You have access to the basic functions of the website. #{adminAccess}"
  end
end

class Admin < User
end
