class Program < ApplicationRecord
    has_many :trainees
    has_many :trainers, through: :trainees
end
