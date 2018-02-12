import React from 'react';
import ReviewDiv from '../components/ReviewDiv';

class Reviews extends React.Component {

  render() {

    var reviews = this.props.data.map(function(review, index) {
        return <ReviewDiv key= {index} data={review}/>
    }, this);

    var reviewStyle = {
                        width: '40%'
                      };
    return <div>
            <div><a href="/">Back</a></div>
            <div style = {reviewStyle}>{reviews}</div>
          </div>
  }
}

export default Reviews;
