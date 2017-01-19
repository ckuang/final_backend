import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';

import RestaurantForm from './RestaurantForm.jsx';

const Restaurants = React.createClass({
	getInitialState(){
		return {restaurants: null}
	},

	componentDidMount(){
		axios.get('/api/restaurants')
		.then((restaurantsObj) => {
			let data = restaurantsObj.data
			this.setState({restaurants: data})
		})
	},

	render() {
		let restaurants = this.state.restaurants
		//console.log(restaurants)
		return (
		<div>	
			<div>
				<ol>
					{ 
						!restaurants ? null : restaurants.map((restaurant, idx) => {
							return <Link key={idx} to={'/restaurants/' +  restaurant.id}><li>{restaurant.name}</li></Link>
						})
					}
				</ol>
			</div>
			<RestaurantForm />
		</div>
		)
	}
});

export default Restaurants;