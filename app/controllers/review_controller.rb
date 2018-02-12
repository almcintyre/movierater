class ReviewController < ApplicationController
  protect_from_forgery with: :exception
  before_action :set_review, only: [:edit, :update, :destroy]
  before_action :set_movie, only: [:create]

  def show
    @reviews = []
    for review in Review.all
      review.poster = Movie.find(review.movie_id).poster
      @reviews << review
    end
  end

  def create
    @review = Review.new(review_params)
    @review.movie_id = @movie.id
    @review.poster = @movie.poster
    @review.title = @movie.title
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

  def recent_reviews
    reviews = Review.all
    for i 0..2 do
      @reviews << reviews[i]
    end
  end

  private
    def set_review
      @review = Review.find(params[:review][:id])
    end

    def set_movie
      @movie = Movie.find(params[:review][:movie_id])
    end

    def review_params
      params.require(:review).permit(:rating, :comment, :email, :movie_id, :poster, :title)
    end
end
