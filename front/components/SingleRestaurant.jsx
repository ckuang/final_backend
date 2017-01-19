import React from 'react';
import $ from 'jquery';
import {displaySingleRestaurant} from 'restaurantActions';
import NewRestaurant from 'NewRestaurant';

const SingleRestaurant = React.createClass({

  componentDidMount: function() {
    $.ajax({
      url: '/api/restaurants/' + this.props.params.id,
      type: "GET"
    })
    .done(function(restaurant) {
      displaySingleRestaurant(restaurant);
    })
  },

  render: function() {
    this.props.singleRestaurant ? console.log(this.props.singleRestaurant.Reviews) : null
    return (
        <div>
        {this.props.singleRestaurant ? 
          <div>
            <div>
              <h1>{this.props.singleRestaurant.name}</h1>
              <h2>Serves {this.props.singleRestaurant.cuisine}</h2>
              <h3>found in {this.props.singleRestaurant.neighborhood}</h3>
              <h3>at {this.props.singleRestaurant.address}</h3>
              <h4>Price range: {this.props.singleRestaurant.cost}</h4>
            </div>
            <div>
              <h1>Reviews:</h1>
              {this.props.singleRestaurant.Reviews ? this.props.singleRestaurant.Reviews.map(function(val, idx) {
                return (
                  <div key={idx}>
                    <h2>{val.rating}: {val.description}</h2>
                  </div>
                )
              }) : null}
            </div>
          </div>
       :null}
      </div>
    )
  }
})

export default SingleRestaurant;

        // <h2>{this.props.name}</h2>
        // <h3>Serves: {this.props.cuisine}</h3>
        // <h3>in {this.props.area}</h3>
        // <h3>at {this.props.address}</h3>
        // <h4>Price Range: {this.props.cost}</h4>