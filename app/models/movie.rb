class Movie < ApplicationRecord
  has_many :reviews
  validates_presence_of :title, :release_date, :poster
end
