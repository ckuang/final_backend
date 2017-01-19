import React from 'react';
import $ from 'jquery';
import Reviews from './Reviews';
import NewReview from './NewReview';

const IndividualRestaurant = React.createClass({
	getInitialState() {
		return(
		{
			name: "",
			neighborhood: "",
			address: "",
			cuisine: "",
			cost: "",
			reviews: []
		}
		)
	},
	componentWillMount() {
		console.log('Individual Restaurant Mounting');
		var currentRestaurant = this.props.params.id
		var that = this;
		$.ajax({
			url: '/api/restaurant/' + currentRestaurant,
			type: 'GET',
			success: function (data) {
				that.setState({ name: data.name, neighborhood: data.neighborhood, address: data.address, cuisine: data.cuisine, cost: data.cost, reviews: data.Reviews })
			}
		})
	},
	render() {
		return(
			<div>
				<h1>
				{this.state.name}
				</h1>
				<br />
				<br />
				<div><h4>Neighborhood: </h4>{this.state.neighborhood}</div>
				<div><h4>Address: </h4>{this.state.address}</div>
				<div><h4>Cuisine: </h4>{this.state.cuisine}</div>
				<div><h4>Cost: </h4>{this.state.cost}</div>
				<br />
				<br />
				<h2>Reviews</h2>
				
				{this.state.reviews.map(function(reviews, idx){
            return(
            	<Reviews key={idx} reviewRating={reviews.rating} reviewDate={reviews.date} reviewDescription={reviews.description} />
            )
          })
        }
        <br />
        <NewReview restaurantId={this.props.params.id} />
    
			</div>
		)
	}
});

export default IndividualRestaurant;