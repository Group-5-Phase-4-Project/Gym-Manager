class Trainer < ApplicationRecord
    has_many :trainees
    has_many :programs, through: :trainees
end
