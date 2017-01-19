import React from 'react';
import $ from 'jquery';
import Restaurant from './Restaurant';
import NewRestaurant from './NewRestaurant';

const Restaurants = React.createClass({
	getInitialState() {
		return(
		{
			restaurants: null
		}
		)
	},
	componentWillMount() {
		var that = this;
		console.log('Component Mounting Now!')
		$.ajax({
			url: '/api/restaurants',
			type: 'GET', 
			success: function (data) {
				console.log(data)
				that.setState({ restaurants: data })

			}
		})
	},
	render() {
		if(this.state.restaurants) {
      return(
        <div>
          {this.state.restaurants.map(function(restaurant, idx){
            return (<Restaurant key={idx} restaurantName={restaurant.name} restaurantId={restaurant.id}/>)
          })}
          <NewRestaurant />
        </div>
      )
    } else {
      return (<div>Restaurant List Is Loading...</div>)
    }
  }
});

export default Restaurants;