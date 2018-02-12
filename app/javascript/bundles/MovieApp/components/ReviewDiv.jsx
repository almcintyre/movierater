import React from 'react';
import ReactStars from 'react-stars';

class ReviewDiv extends React.Component {

  render() {
    var comment = this.props.data.comment;
    var email = this.props.data.email;
    var rating = this.props.data.rating;
    var poster = this.props.data.poster;
    var title = this.props.data.title;
    var style = {
      paddingTop: '10px'
    };
    var img = {
                width: '75px'
              };
    var movieImg = {
                    float: 'left'
                    };
    var movieRow = {
                    display: 'inline-block',
                    width: '60%',
                    border: '1px solid #b8babc',
                    marginBottom: '10px',
                    backgroundColor: '#d9dbdd'
                  };
    var reviewText = {
                      paddingTop: '37px',
                      paddingLeft: '95px'
                     };
    return <div style= {movieRow}>
             <div style= {movieImg}>
               <img src = {this.props.data.poster} style = {img}></img>
               </div>
            <div style = {reviewText}>
              <div><b>{title}</b></div>
              <ReactStars
                count={5}
                value={Number(rating)}
                size= {12}
                edit = {false}/>
              <div>{comment} - {email}</div>
            </div>
          </div>
  }
}

export default ReviewDiv;
