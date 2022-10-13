class AddPasswordDigestToTrainees < ActiveRecord::Migration[7.0]
  def change
    add_column :trainees, :password_digest, :string
  end
end
