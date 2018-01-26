class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :email
      t.string :comment
      t.string :rating
      t.references :movie, foreign_key: true

      t.timestamps
    end
  end
end
