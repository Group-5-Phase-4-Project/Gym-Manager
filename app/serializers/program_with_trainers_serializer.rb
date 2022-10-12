class ProgramWithTrainersSerializer < ActiveModel::Serializer
  attributes :id, :name, :duration, :description

  has_many :trainers
end
