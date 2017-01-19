import React from 'react';
import {Link} from 'react-router';

const Restaurant = (props) => {
  let restaurant = props.restaurant;

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <div><b>Neighborhood: </b>{restaurant.neighborhood}</div>
      <div><b>Address: </b>{restaurant.address}</div>
      <div><b>Cuisine: </b>{restaurant.cuisine}</div>
      <div><b>Cost: </b>{restaurant.cost}</div>
    </div>
  )
}

export default Restaurant;
