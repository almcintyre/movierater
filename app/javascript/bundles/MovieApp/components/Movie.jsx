import React from 'react';
import Review from '../components/Review';

class Movie extends React.Component {
  constructor() {
    super();
    this.state = {
      showForm: false
    }
  }

  render() {
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
    var movieInfo = {paddingLeft: '220px'};
    var title = {paddingTop: '25px'};
    var release = {};
    var releaseDate = moment(this.props.data.release_date).format('MMM DD, YYYY');
    const showHide = {
      'display': this.state.showForm ? 'block' : 'none'
    };

    const showReviewForm = () => {
      this.setState({showForm: true});
    };
    return <div style= {movieRow}>
             <div style= {movieImg}>
               <img src = {this.props.data.poster} style = {img}></img>
             </div>
             <div style= {movieInfo}>
               <div style= {title}><h2>{this.props.data.title}</h2></div>
               <div style= {release}><b>Release date</b>: {releaseDate}</div>
               <button onClick={showReviewForm}>Leave a review</button>
               <div style={showHide}>
                 <Review movie = {this.props.data}/>
               </div>
             </div>
            </div>
  }
}

export default Movie;
