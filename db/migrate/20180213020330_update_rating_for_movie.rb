class UpdateRatingForMovie < ActiveRecord::Migration[5.1]
  def change
    remove_column :movies, :rating, :string
    add_column :movies, :rating, :float
  end
end
