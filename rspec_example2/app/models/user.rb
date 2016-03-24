class User < ActiveRecord::Base
  validates_presence_of :birthday, :name
  validate :atleast18
  validate :fullname
  validates :password, length: { minimum: 8 }

  def atleast18
    if self.birthday && !(self.birthday < 18.years.ago)
      errors.add(:birthday, "should be 18!")
    end
  end

  def get_pretty_birthday
    self.birthday.strftime("%m-%d-%Y")
  end

  def fullname
    if self.name && !(self.name.match(/\s/))
      errors.add(:name, "Include your full name.")
    end
  end

end
