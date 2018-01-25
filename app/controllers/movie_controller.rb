# frozen_string_literal: true

class MovieController < ApplicationController
  layout "movie"

  def index
    @movie_props, @errors = MovieService::Movie.discover()
  end

  def show
    @movies = MovieService::Movie.search(query)
  end

  private
  def query
    params.fetch(:query, {})
  end
end
