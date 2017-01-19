import React from 'react';

const Review = (props) => {
  let review = props.review;

  return (
    <div>
      <div><b>Date: </b> {review.date}</div>
      <div><b>Rating: </b> {review.rating}</div>
      <div><b>Description: </b> {review.description}</div>
    </div>
  )
}

export default Review;
