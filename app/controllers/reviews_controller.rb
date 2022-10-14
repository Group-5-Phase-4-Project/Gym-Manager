class ReviewsController < ApplicationController
    

    def index 
        render json: Review.all, status: :ok
    end
    def show 
        review = Review.find_by!(id: params[:id])
        render json: review, status: :ok
    end
    def create 
        review = Review.create(review_params)
        render json: review, status: :created
    end
    def destroy 
        review = Review.find_by!(id: params[:id])
        Review.destroy
        render json: { }, status: :no_content
    end
    def update 
        review = Review.find_by!(id: params[:id])
        Review.update 
        render json: review , status: :accepted
    end

    private 
    def review_params
        params.permit(:name, :body)
    end
end
