class AddColumnsToTrainee < ActiveRecord::Migration[7.0]
  def change
    add_column :trainees, :weight, :integer
    add_column :trainees, :height, :integer
    add_column :trainees, :gender, :string
    
  end
end
