class TrainersController < ApplicationController
    def index 
        render json: Trainer.all, status: :ok
    end
    def show 
        trainer = Trainer.find_by(id: params[:id])
        render json: trainer, status: :ok
    end
end
