class User < ActiveRecord::Base
  def access
    "You have access to the basic functions of the website. #{adminAccess}"
  end

  def adminAccess
  end

end

class Admin < User
  def adminAccess
    "You have access to the admin section too."
  end

  def adminGreeting
    "Welcome admin!"
  end
end
