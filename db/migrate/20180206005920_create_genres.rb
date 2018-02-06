class CreateGenres < ActiveRecord::Migration[5.1]
  def change
    create_table :genres do |t|
      t.string :genre_id
      t.string :name
      t.references :movie, foreign_key: true

      t.timestamps
    end
  end
end
