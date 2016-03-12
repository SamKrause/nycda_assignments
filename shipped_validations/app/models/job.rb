class Job < ActiveRecord::Base
  belongs_to :boat
  validates_uniqueness_of :name
  validates :cargo, length: {minimum: 50, maximum: 200}
  validates :cost, numericality: { only_integer: true, greater_than_or_equal_to: 1001}
  validates :origin, inclusion: {in: ["San Fran", "New Bedford", "Nantucket", "Miami", "Philadelphia", "LA", "Baltimore", "Montevideo"]}
  validates :destination, inclusion: {in: ["San Fran", "New Bedford", "Nantucket", "Miami", "Philadelphia", "LA", "Baltimore", "Montevideo"]}


end
