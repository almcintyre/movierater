class RemoveMovieIdFromGenre < ActiveRecord::Migration[5.1]
  def change
    remove_column :genres, :movie_id, :integer
  end
end
