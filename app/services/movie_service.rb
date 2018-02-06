module MovieService
  class Movie
    attr_accessor :vote_average,
                  :id,
                  :title,
                  :genres,
                  :release_date,
                  :poster,
                  :genre_ids

    MAX_LIMIT = 10

    def self.search(query = {})
      response = Request.where('/search/movie?', query)
      movies = response.fetch('results', []).map { |movie| Movie.new(movie) }
      [ movies, response[:errors] ]
    end

    def self.discover()
      response = Request.get("/discover/movie?sort_by=popularity.desc")
      movies = response.fetch('results', []).map { |movie| Movie.new(movie) }
      [ movies, response[:errors] ]
    end

    def initialize(args = {})
      args.each do |name, value|
        attr_name = name.to_s.underscore
        send("#{attr_name}=", value) if respond_to?("#{attr_name}=")
      end
      self.poster = parse_poster(args)
    end

    def self.genres()
      response = Request.get("/genre/movie/list", true)
      genres = response.fetch('genres', []).map{ |genre| Genre.new(genre)}
      [ genres, response[:errors] ]
    end

    def parse_poster(args)
      poster_path = args["poster_path"]
      poster = "http://image.tmdb.org/t/p/original" + poster_path
    end

  end
end
