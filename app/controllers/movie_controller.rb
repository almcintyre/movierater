# frozen_string_literal: true

class MovieController < ApplicationController
  layout "movie"

  def index
    @genres = genres()
    @movies = Movie.all
    if @movies.empty?
      @movies = []
      movie_props, @errors = MovieService::Movie.discover()
      movie_props.each do |movie|
        newMovie = Movie.create(title: movie.title,
                                release_date: movie.release_date,
                                poster: movie.poster)
        newMovie.genre = matchGenres(movie.genre_ids)
        @movies << newMovie
      end
    end
    @movies.each do |movie|
      @reviews = Review.where(movie_id: movie.id).order("created_at DESC")
      if @reviews.blank?
        @avg_review= 0
      else
        @avg_review = @reviews.average('CAST(rating AS INT)').round(2)
      end
      movie.rating = @avg_review
      movie.save
    end
  end

  def genres()
    @genres = Genre.all
    if @genres.empty?
      genre_props, @errors = MovieService::Movie.genres()
      genre_props.each do |genre|
        newGenre = Genre.create(genre_id: genre.id,
                                name: genre.name)
      end
    end
  end

  def matchGenres(genre_ids)
    genre = Genre.where(genre_id: genre_ids.first)
    name = genre.first[:name]
  end

  def reviews
    reviews = Review.where(movie_id: movie_params[:id]).order("created_at DESC")
    respond_with reviews, json: reviews
  end

  private
  def query
    params.fetch(:query, {})
  end

  def movie_params
    params.require(:movie).permit(:title, :release_date, :poster, :id, :rating, :created_at, :updated_at, :genre)
  end
end
