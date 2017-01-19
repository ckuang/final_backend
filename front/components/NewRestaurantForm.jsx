import React from 'react';
import $ from 'jquery';
import {createNewRestaurant} from 'formActions';
import {displayRestaurantsList} from 'restaurantActions'
import {Link} from 'react-router';


const NewRestaurant = React.createClass({

  handleSubmit: function(e) {
    e.preventDefault();
    $.ajax({
      url: '/api/restaurants',
      type: 'POST',
      data: {
        name: this.props.name,
        neighborhood: this.props.neighborhood,
        address: this.props.address,
        cuisine: this.props.cuisine,
        cost: this.props.cost
      }
    })
    .done(function(restaurant) {
      console.log('New restaurant created.', restaurant)
      $.ajax({
        url: '/api/restaurants',
        type: "GET"
      })
      .done(function(restaurant) {
        displayRestaurantsList(restaurant)
      })
    })
  },

  handleChange: function(e) {
    let name = e.target.name;
    let value = e.target.value;
    createNewRestaurant(name, value);
    console.log(name, value)
    console.log('PROPS: ', this.props[name])
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="name" placeholder="Restaurant Name" /><br/>
          <input onChange={this.handleChange} type="text" name="neighborhood" placeholder="Restaurant Neighborhood" /><br/>
          <input onChange={this.handleChange} type="text" name="address" placeholder="Restaurant Address" /><br/>
          <select onChange={this.handleChange} name="cuisine">
            <option value="japanese">Japanese</option>
            <option value="chinese">Chinese</option>
            <option value="italian">Italian</option>
            <option value="french">French</option>
          </select>
          <select onChange={this.handleChange} name="cost">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select><br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
})
export default NewRestaurant;
