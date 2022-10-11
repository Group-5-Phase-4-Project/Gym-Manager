class AddForeignKeysToReviews < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :program_id, :integer
    add_column :reviews, :trainee_id, :integer
  end
end
