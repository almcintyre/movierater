class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :release_date
      t.string :rating
      t.string :poster

      t.timestamps
    end
  end
end
