class CreateTrainers < ActiveRecord::Migration[7.0]
  def change
    create_table :trainers do |t|
      t.string :name
      t.string :specialization
      t.string :background
      t.integer :no_of_trainees

      t.timestamps
    end
  end
end
