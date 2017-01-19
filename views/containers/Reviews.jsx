import React from 'react';
import Review from '../components/Review';

const Reviews = (props) => {
  let reviews = props.reviews;

  return (
    <div>
      <h2>Reviews</h2>
      <ol>
        {
          reviews.map((review, indx) => {
            return <li key={indx}><Review review={review} /></li>
          })
        }
      </ol>
    </div>
  )
}

export default Reviews;
