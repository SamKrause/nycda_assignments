class User < ActiveRecord::Base
  has_many :posts
  has_secure_password

  validates_confirmation_of :password
  validates_presence_of :fname, :lname, :team, :email
  validates_presence_of :password, on: :create
  validates :email, uniqueness: true
  validates :team, uniqueness: true

  has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"

  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/

  before_validation :capitalize_names

  def capitalize_names
    self.fname = self.fname.capitalize;
    self.lname = self.lname.capitalize;
  end

  before_validation :downcase_email

  def downcase_email
    self.email = self.email.downcase
  end

end
