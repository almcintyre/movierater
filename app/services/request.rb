class Request
  class << self
    def where(resource_path, query = {}, options = {})
      response, status = get_json(resource_path, query)
      status == 200 ? response : errors(response)
    end

    def get(id, genre = false)
      if genre
        response, status = get_genres(id)
      else
        response, status = get_json(id)
      end
      status == 200 ? response : errors(response)
    end

    def errors(response)
      error = { errors: { status: response["status"], message: response["message"] } }
      response.merge(error)
    end

    def get_json(root_path, query = {})
      path = query.empty?? "/3#{root_path}&api_key=#{ENV['MOVIE_DB_API_KEY']}" : "/3#{root_path}api_key=#{ENV['MOVIE_DB_API_KEY']}&query=#{query_string}"
      response = api.get(path)
      [JSON.parse(response.body), response.status]
    end

    def get_genres(root_path)
      path = "/3#{root_path}?api_key=#{ENV['MOVIE_DB_API_KEY']}"
      response = api.get(path)
      [JSON.parse(response.body), response.status]
    end

    def api
      Connection.api
    end
  end
end
