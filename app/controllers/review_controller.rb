class ReviewController < ApplicationController
  protect_from_forgery with: :exception
  before_action :set_review, only: [:show, :edit, :update, :destroy]
  before_action :set_movie

  def new
    @review = Review.new
  end

  def edit
  end

  def create
    @review = Review.new(review_params)
    @review.movie_id = @movie.id
    respond_to do |format|
      if @review.save
        format.html { redirect_to root_path, notice: 'Review was successfully created.' }
        format.json { render :show, status: :created, location: @review }
      else
        format.html { render :new }
        format.json { render json: @review.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:review][:id])
    end

    def set_movie
      @movie = Movie.find(params[:review][:movie_id])
    end

    def review_params
      params.require(:review).permit(:rating, :comment, :email, :movie_id)
    end
end
