import React from 'react';
import {ajax} from 'jquery';
import Restaurant from '../components/Restaurant';
import Reviews from '../containers/Reviews';

const RestaurantContainer = React.createClass({
  getInitialState(){
    let date = new Date().toISOString().slice(0, 10)

    return {restaurant: null, reviews: [], date: date, rating: '1', description: ''}
  },
  componentDidMount(){
    ajax({
      url: `/api/restaurants/${this.props.params.id}`,
      type: 'GET',
    })
    .done((restaurant) => {
      this.setState({restaurant, reviews: restaurant.reviews})
    })
  },
  handleChange(type, e){
    this.setState({[type]: e.target.value})
  },
  handleSubmit(e){
    e.preventDefault();

    let state = this.state;
    let {date, rating, description} = state;
    let defaultDate = new Date().toISOString().slice(0, 10)
    let restaurantId = state.restaurant.id;

    ajax({
      url: '/api/review',
      type: 'POST',
      data: {date, rating: parseInt(rating), description, restaurantId}
    })
    .done((review) => {
      let reviews = state.reviews.slice(0);
      reviews.push(review)
      //console.log(reviews)
      this.setState({reviews, date: defaultDate, rating: '1', description: ''})
    })
  },
  render(){
    let restaurant = this.state.restaurant;
    let reviews = this.state.reviews

    return (
      <div>
        {restaurant ? <Restaurant restaurant={restaurant} /> : null}

        <Reviews reviews={reviews} />

        <form onSubmit={this.handleSubmit}>
          <h2>Write a New Review</h2>

          <input type="date" onChange={this.handleChange.bind(this, 'date')} value={this.state.date}/>

          <div>
            <textarea onChange={this.handleChange.bind(this, 'description')} value={this.state.description}/>
          </div>

          <div>
            <select onChange={this.handleChange.bind(this, 'rating')} value={this.state.rating}>
              <option value="1">*</option>
              <option value="2">**</option>
              <option value="3">***</option>
              <option value="4">****</option>
              <option value="5">*****</option>
            </select>
          </div>

          <div><input type="submit" value="Submit Review" /></div>
        </form>
      </div>
    )
  }
})

export default RestaurantContainer;
