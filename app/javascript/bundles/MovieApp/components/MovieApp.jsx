import React from 'react';
import Movie from '../components/Movie';
import Reviews from '../components/Reviews';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class MovieApp extends React.Component{

  constructor() {
    super();
    this.state = {
      reviews: []
    }
  }

  fetchRecentReviews() {
    var csrfToken = $('meta[name=csrf-token]').attr('content');
    $.ajax({ url: 'review/recent',
           type: 'GET',
           headers: {'X-CSRF-Token': csrfToken},
          success: (response) => {
            this.setState({reviews: response});
          }
      });
  }

  render () {
    var movies = this.props.data.map(function(movie, index) {
        return <Movie key= {index} data={movie} />
    }, this);

    var reviewsStyle = {
                          paddingLeft: '20px'
                       };

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
            <a href="/reviews/show" style={reviewsStyle}>All Reviews</a>
            <br></br>
            {movies}
          </div>
  }
}

export default MovieApp;
