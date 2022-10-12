class TrainersSerializer < ActiveModel::Serializer
  attributes :id, :name, :specialization, :background, :no_of_trainees
end
