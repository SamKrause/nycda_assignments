class User < ActiveRecord::Base
  ROLES = %w[admin normal banned].freeze
  has_many :posts
end
