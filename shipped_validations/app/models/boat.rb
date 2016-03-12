class Boat < ActiveRecord::Base
  belongs_to :user
  has_many :jobs
  validates_uniqueness_of :name
  validates :location, inclusion: {in: ["San Fran", "New Bedford", "Nantucket", "Miami", "Philadelphia", "LA", "Baltimore", "Montevideo"]}
end
