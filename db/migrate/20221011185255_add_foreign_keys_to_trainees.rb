class AddForeignKeysToTrainees < ActiveRecord::Migration[7.0]
  def change 
    add_column :trainees, :program_id, :integer
    add_column :trainees, :trainer_id, :integer

  end
end
