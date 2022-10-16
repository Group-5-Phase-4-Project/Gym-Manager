class SessionsController < ApplicationController
    
    def create
      trainee = Trainee.find_by(name: params[:name])
      # finds existing user, checks to see if user can be authenticated

      if trainee&.authenticate(params[:password])
        session[:trainee_id] = trainee.id
        render json: trainee, status: :ok
      else
        render json: {error: "Not authorized"}, status: :unauthorized
      end
     
    end
    def destroy
      # deletes user session
      session.delete :trainee_id
    head :no_content
    end
end