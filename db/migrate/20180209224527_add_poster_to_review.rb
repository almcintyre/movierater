class AddPosterToReview < ActiveRecord::Migration[5.1]
  def change
    add_column :reviews, :poster, :string
  end
end
