import React from 'react';
import $ from 'jquery';

const NewReview = React.createClass({
	getInitialState() {
		return(
			{
				rating: null,
				date: "",
				description: ""
			}
		)
	},
	dateHandleChange(event) {
		this.setState({ date: event.currentTarget.value })
		console.log(this.state.date)
	},
	descriptionHandleChange(event) {
		this.setState({ description: event.currentTarget.value })
		console.log(this.state.description)
	},
	ratingHandleChange(event) {
		this.setState({ rating: event.currentTarget.value })
		console.log(this.state.rating)
	},
	addNewReview(event) {
		event.preventDefault()
		var currentRestaurant = this.props.restaurantId
		var that = this;
		$.ajax({
			url: '/api/review/' + currentRestaurant,
			type: 'POST',
			data: { date: that.state.date, rating: that.state.rating, description: that.state.description },
			success: function (message) {
				console.log(message)
			}
		})
	},
	render() {
		return(
			<div>
				<h3>Add A New Review</h3>
				<br />
				<form onSubmit={this.addNewReview}>
					<select onChange={this.ratingHandleChange}>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
					<br />
					<input type="date" onChange={this.dateHandleChange}></input>
					<br />
					<input type="text" placeholder="Description" ref="description" onChange={this.descriptionHandleChange}></input>					
					<br />
					<button type="submit">Add New Review</button>
				</form>
				<br />
				<br />
				<br />
			</div>
		)
	}
});

export default NewReview;