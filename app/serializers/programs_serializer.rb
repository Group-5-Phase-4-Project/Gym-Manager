class ProgramsSerializer < ActiveModel::Serializer
  attributes :id, :name, :duration, :description
end
