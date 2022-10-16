class TraineesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

 before_action :authorize
 skip_before_action :authorize, only: [:create ]
  

    def index 
        render json: Trainee.all, status: :ok
    end
    def show 
        trainee = Trainee.find_by!(id: session[:trainee_id])
        render json: trainee, status: :ok
    end
    def create 
        trainee = Trainee.create!(**trainee_params,
             program_id: Program.all[rand(Program.count)].id, 
             trainer_id: Trainer.all[rand(Trainer.count)].id)
        session[:trainee_id] = trainee.id
        render json: trainee, serializer: TraineesSerializer, status: :created
        
    end
    def destroy 
        trainee = Trainee.find_by!(id: session[:trainee_id])
        Trainee.destroy
        render json: { }, status: :no_content
    end
    def update 
        trainee = Trainee.find_by!(id: session[:trainee_id])
        Trainee.update!(name: params[:name], age: params[:age]) 

        render json: trainee , status: :accepted
    end

    private 

    def render_not_found_response
        render json: {error: "User not found"}, status: :not_found
    end
    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
    def trainee_params
        params.permit(:name, :age, :program_picked, :password)
    end
    def authorize
        render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :trainee_id 
    end

        # render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :trainee_id 

    


    

end
