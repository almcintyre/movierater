class Genre < ApplicationRecord
  validates_presence_of :genre_id, :name
end
