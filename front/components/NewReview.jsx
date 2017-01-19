import React from 'react';
import $ from 'jquery';
import {createReview} from 'formActions';

const NewReview = React.createClass({
 
  handleChange: function(e) {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value)
    createReview(name, value) 
  },

  handleSubmit: function(e) {
    e.preventDefault();
    $.ajax({
      url: '/api/review',
      type: 'POST',
      data: {
        date: this.props.date,
        rating: this.props.rating,
        description: this.props.description
      }
    })
    .done(function(review) {
      console.log(review)
    })
  },

  render: function() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="date" name="date" onChange={this.handleChange}/><br/>
            <select name="rating" onChange={this.handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="text" name="description" placeholder="Write a review" onChange={this.handleChange} />
            <input type="submit" value="Submit"/>
          </form>
        </div>
      )
    }
})
export default NewReview;