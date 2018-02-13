import React from 'react';
import Movie from '../components/Movie';
import Reviews from '../components/Reviews';
import ReviewDiv from '../components/ReviewDiv';
import $ from 'jquery';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class MovieApp extends React.Component{

  constructor() {
    super();
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
      this.fetchRecentReviews();
  }

  fetchRecentReviews() {
    var csrfToken = $('meta[name=csrf-token]').attr('content');
    $.ajax({ url: 'reviews/recent',
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

    var reviews = this.state.reviews.map(function(review, index) {
      return <ReviewDiv key = {index} data = {review} showPoster = {false}/>
    }, this);

    var reviewsStyle = {
                          paddingLeft: '20px'
                       };
    var recentReviews = {
                          float: 'right',
                          width: '30%',
                          paddingLeft: '20px',
                          backgroundColor: '#d9dbdd',
                          border: '1px solid #b8babc'
                        };
    var moviesStyle = {
                        float: 'left',
                        width: '60%'
                      };
    var linkStyle = {
                      float: 'right'
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
            <div style = {moviesStyle}>{movies}</div>
            <div style = {recentReviews}>
              <b>Recent Reviews</b>
              {reviews}
              <a href="/reviews/show" style={linkStyle}>View All Reviews</a>
            </div>
          </div>
  }
}

export default MovieApp;
