import React from 'react';
import $ from 'jquery';

const NewRestaurant = React.createClass({
	getInitialState() {
		return(
			{
				name: "",
				neighborhood: "",
				address: "",
				cuisine: "",
				cost: 5
			}
		)
	},
	nameHandleChange(event) {
		this.setState({ name: event.currentTarget.value })
		console.log(this.state.name)
	},
	neighborhoodHandleChange(event) {
		this.setState({ neighborhood: event.currentTarget.value })
		console.log(this.state.neighborhood)
	},
	addressHandleChange(event) {
		this.setState({ address: event.currentTarget.value })
		console.log(this.state.address)
	},
	cuisineHandleChange(event) {
		this.setState({ cuisine: event.currentTarget.value })
		console.log(this.state.cuisine)
	},
	costHandleChange(event) {
		this.setState({ cost: event.currentTarget.value })
		console.log(this.state.cost)
	},
	addNewRestaurant(event) {
		var that = this;
		$.ajax({
			url: '/api/restaurants',
			type: 'POST',
			data: { name: that.state.name, neighborhood: that.state.neighborhood, address: that.state.address, cuisine: that.state.cuisine, cost: that.state.cost },
			success: function (message) {
				console.log(message)
			}
		})
	},
	render() {
		return(
			<div>
				<form onSubmit={this.addNewRestaurant}>
					<input type="text" placeholder="Name" ref="name" onChange={this.nameHandleChange}></input>
					<br />
					<input type="text" placeholder="Neighborhood" ref="neighborhood" onChange={this.neighborhoodHandleChange}></input>
					<br />
					<input type="text" placeholder="Address" ref="address" onChange={this.addressHandleChange}></input>
					<br />
					<input type="text" placeholder="Cuisine" ref="cuisine" onChange={this.cuisineHandleChange}></input>
					<br />
					<select onChange={this.costHandleChange}>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
					<br />
					<button type="submit">Add New Restaurant</button>
				</form>
			</div>
		)
	}
});

export default NewRestaurant;