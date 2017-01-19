import React from 'react';
import $ from 'jquery';
import {displayRestaurantsList} from 'restaurantActions';
import {Link} from 'react-router';
import NewRestaurant from 'NewRestaurant';

// import SingleRestaurant
import SingleRestaurant from 'SingleRestaurant';

const Restaurants = React.createClass({
  
  componentDidMount: function() {
    $.ajax({
      url: '/api/restaurants',
      type: 'GET'
    })
    .done(function(restaurants) {
      displayRestaurantsList(restaurants);
    })
  },

  render: function() {
    console.log("PROPS:", this.props.restaurants)
    let that = this;
    return (
      <div>
        <h1>Restaurants</h1>
        {this.props.restaurants ? this.props.restaurants.map(function(val, idx) {
          return (
            <div key={idx}>
              <Link to={`/singlerestaurants/${val.id}`}>{val.name}</Link><br/>
            </div>
          )
        }) :null}
      </div>
    )
  }
})

export default Restaurants;