import React from 'react';
import Review from '../components/Review';
import ShowReview from '../components/ShowReview';
import $ from 'jquery';
import ReactStars from 'react-stars';

class Movie extends React.Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
      reviews: []
    }
  }

  componentDidMount() {
    var csrfToken = $('meta[name=csrf-token]').attr('content');
    var movie = this.props.data;
    $.ajax({ url: 'movie/reviews',
           type: 'GET',
           data: { movie: movie},
           headers: {'X-CSRF-Token': csrfToken},
          success: (response) => {
            this.setState({reviews: response});
          }
      });
  }
  render() {
    var reviews = this.state.reviews.map(function (review, index) {
      if (review != undefined) {
        return <ShowReview key= {index} data={review}/>
      }
    });

    var moment = require('moment');
    var movieRow = {
                    display: 'inline-block',
                    width: '60%',
                    border: '1px solid #b8babc',
                    marginBottom: '20px',
                    backgroundColor: '#d9dbdd'
                  };
    var movieImg = {
                    float: 'left',
                    paddingBottom: '20px',
                    backgroundColor: 'white'
                  };
    var img = {
                width: '200px',
                borderBottom: '2px solid #888a8c'
              };
    var reactStar = {
                      margin: 'auto',
                      width: '50%'
                    };
    var movieInfo = {paddingLeft: '220px'};
    var title = {paddingTop: '25px'};
    var releaseDate = moment(this.props.data.release_date).format('MMM DD, YYYY');
    const showHide = {
      'display': this.state.showForm ? 'block' : 'none'
    };

    const showReviewForm = () => {
      this.setState({showForm: !this.state.showForm});
    };
    return <div style= {movieRow}>
             <div style= {movieImg}>
               <img src = {this.props.data.poster} style = {img}></img>
               <div style = {reactStar}>
                 <ReactStars
                 count={5}
                 value={Number(this.props.data.rating)}
                 size= {20}
                 edit = {false}/>
               </div>
             </div>
             <div style= {movieInfo}>
               <div style= {title}><h2>{this.props.data.title}</h2></div>
               <div><b>Release date</b>: {releaseDate}</div>
               <div><b>Genre</b>: {this.props.data.genre}</div>
               <button onClick={showReviewForm}>Leave a review</button>
               <div style={showHide}>
                 <Review movie = {this.props.data}/>
               </div>
               {reviews}
             </div>
            </div>
  }
}

export default Movie;
