class Review < ApplicationRecord
  belongs_to :movie
  validates_presence_of :email, :rating, :movie_id
end
