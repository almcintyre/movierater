import React from 'react';
import ReactStars from 'react-stars';

class ShowReview extends React.Component {

  render() {
    var comment = this.props.data.comment;
    var email = this.props.data.email;
    var rating = this.props.data.rating;
    var style = {
      paddingTop: '10px'
    };
    var img = {
                width: '200px'
              };
    var movieImg = {
                    float: 'left',
                    paddingBottom: '20px',
                    backgroundColor: 'white'
                    };
    return <div style = {style}>
            <ReactStars
              count={5}
              value={Number(rating)}
              size= {12}
              edit = {false}/>
            <div>{comment} - {email}</div>
          </div>
  }
}

export default ShowReview;
