class Review < ApplicationRecord
    belongs_to :trainee
    belongs_to :program
end
