class CreateTrainees < ActiveRecord::Migration[7.0]
  def change
    create_table :trainees do |t|
      t.string :name
      t.integer :age
      t.string :program_picked

      t.timestamps
    end
  end
end
