class Trainee < ApplicationRecord
    belongs_to :program
    belongs_to :trainer
    has_secure_password
    
     
end
