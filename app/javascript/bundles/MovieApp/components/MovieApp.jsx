import React from 'react';
import Movie from '../components/Movie';

class MovieApp extends React.Component{

  render () {
    var movies = this.props.data.map(function(movie, index) {
        return <Movie key= {index} data={movie} />
    }, this);

    return <div>
            Sort by:
            <button onClick= {(e) => this.props.sortMoviesByTitle(e.target.value)}>
              Title
            </button>
            <button onClick = {(e) => this.props.sortMoviesByDate(e.target.value)}>
              Release Date
            </button>
            <button onClick = {(e) => this.props.sortMoviesByGenre(e.target.value)}>
              Genre
            </button>
            <br></br>
            {movies}
          </div>
  }
}

export default MovieApp;
