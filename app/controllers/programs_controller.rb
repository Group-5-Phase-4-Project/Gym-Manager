class ProgramsController < ApplicationController
    def index
        render json: Program.all, status: :ok
    end

    def show 
        program = Program.find_by(id: params[:id])
        render json: program, status: :ok
    end
end
