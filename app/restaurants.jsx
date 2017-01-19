var React = require('react')
var $ = require('jquery')
var NewRestaurantForm = require('./newrestaurant.jsx')
import {Link} from 'react-router'

let Restaurants = React.createClass({
  getInitialState: function() {
    return({restaurants: null})
  },
  componentDidMount: function(){
    $.ajax({
      url: '/api/restaurants',
      method: 'GET'
    })
    .done((data) => {
      console.log(data)
      this.setState({restaurants: data})
    })
  },
  render: function() {
    let restaurants = []
    if (this.state.restaurants) {
      return(
        <div>
          <h1>YALP</h1>

          <h3>Restaurant Listings:</h3>
          <ol>
            {this.state.restaurants.map((val) => {
              return(
                <li key={val.id}>
                  <Link to={'/restaurant/' + val.id}>{val.name}</Link>
                </li>
              )})}
          </ol>

          <h3>Add a Restaurant:</h3>
          <NewRestaurantForm />

        </div>
      )
    } else {
      return(
        <div>Loading...</div>
      )
    }
  }
})

module.exports = Restaurants