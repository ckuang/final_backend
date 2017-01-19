import React from 'react';
import axios from 'axios';

const ReviewForm = React.createClass({
	getInitialState() {
		return {restId: this.props.paramId, rating: 1, date: null, description: null}
	},

	handleSubmit(){
		axios.post('/api/review', {
			RestaurantId: this.state.restId,
			rating: this.state.rating,
			date: this.state.date,
			description: this.state.description
		})
		.then((newReview) => {
			res.send(newReview)
		})
		.catch((err) => {
			console.log("ERROR no review made")
		})
	},

	handleText(e) {
		this.setState({description: e.target.value})
	},

	handleDate(e) {
		this.setState({date: e.target.value})
	},

	handleRating(e) {
		this.setState({rating: e.target.value})
	},

	render(){
		//console.log('THIS PROPS', this.props)
		return (
			<div>
				<h3>Write a New Review</h3>
				<form>
					<input type="date" onChange={this.handleDate}/>
					<br/>
					<textarea type="text" placeholder="Describe your experience" onChange={this.handleText}></textarea>
					<br/>
					<select onChange={this.handleRating}>
						<option value="1">*</option>
						<option value="2">**</option>
						<option value="3">***</option>
						<option value="4">****</option>
						<option value="5">*****</option>
					</select>
					<br/>
					<input type="submit" value="Submit Review" onClick={this.handleSubmit} />
				</form>
			</div>
		)
	}
});

module.exports = ReviewForm;