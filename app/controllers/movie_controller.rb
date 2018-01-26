# frozen_string_literal: true

class MovieController < ApplicationController
  layout "movie"

  def index
    @movies = []
    movie_props, @errors = MovieService::Movie.discover()
    movie_props.each do |movie|
      newMovie = Movie.create(title: movie.title,
                              release_date: movie.release_date,
                              poster: movie.poster)
      @reviews = Review.where(movie_id: newMovie.id).order("created_at DESC")
      if @review.blank?
        @avg_review= 0
      else
        @avg_review = @reviews.average(:rating).rount(2)
      end
      @movies << newMovie
    end
  end

  private
  def query
    params.fetch(:query, {})
  end
end
