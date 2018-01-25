module MovieService
  class Movie
    attr_accessor :vote_average,
                  :id,
                  :title,
                  :genres,
                  :release_date,
                  :poster

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

    def parse_poster(args)
      poster_path = args["poster_path"]
      poster = "http://image.tmdb.org/t/p/original" + poster_path
    end

    def parse_genre(args)
      genres = args["genre_ids"]
      genreArray = Array.new
      genres.each do |genre|
        # genreArray << GenreHelper::Genre.where(id: genres[genre]).name
      end
      genres = genreArray
    end
  end
end
