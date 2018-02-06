import React from 'react';
import $ from 'jquery';

class Review extends React.Component {
  handleClick(e) {
    var email = this.refs.email.value;
    var rating = this.refs.rating.value;
    var comment = this.refs.comment.value;
    var csrfToken = $('meta[name=csrf-token]').attr('content');
    var movie = this.props.movie;
    $.ajax({ url: 'review/new',
             type: 'POST',
             data: { review: { email: email, comment: comment, movie_id: movie.id, rating: rating }},
             headers: {'X-CSRF-Token': csrfToken},
            success: (response) => {
              console.log('it worked!', response);
            }
        });
  }

  render () {
    var reviewStyle = {
                        width: '50%',
                        height: '100px',
                        backgroundColor: 'white'
                      };
    var ratingStyle = {
                        width: '10px'
                      };
    return <form>
            <input type = "text" ref= "email" placeholder= "Email"></input><br></br>
            <input type = "text" ref= "rating" placeholder= "Rating" style={ratingStyle} placeholder="0"></input>
            out of 5<br></br>
            <textarea type= "text" ref = "comment" style={reviewStyle}></textarea><br></br>
            <button onClick={this.handleClick.bind(this)}>Submit</button>
           </form>
  }
}

export default Review;
