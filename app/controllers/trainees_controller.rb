class TraineesController < ApplicationController
    def index 
        render json: Trainee.all, status: :ok
    end
    def show 
        trainee = Trainee.find_by!(id: params[:id])
        render json: trainee, status: :ok
    end
    def create 
        trainee = Trainee.create(trainee_params)
        render json: trainee, serializer: TraineesSerializer, status: :created
    end
    def destroy 
        trainee = Trainee.find_by!(id: params[:id])
        Trainee.destroy
        render json: { }, status: :no_content
    end
    def update 
        trainee = Trainee.find_by!(id: params[:id])
        Trainee.update!(name: params[:name], age: params[:age]) 

        render json: trainee , status: :accepted
    end

    private 
    def trainee_params
        params.permit(:name, :age, :program_picked)
    end

    


    

end
