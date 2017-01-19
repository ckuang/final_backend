import React from 'react';
import axios from 'axios';

import ReviewForm from './ReviewForm.jsx';

const RestaurantInfo = React.createClass({
	getInitialState(){
		return {info: null, review: null}
	},

	componentDidMount(){
		axios.get('/api/restaurants/' + this.props.params.id)
		.then((infoObj) => {
			let data = infoObj.data
			let reviews = infoObj.data.Reviews
			//console.log('DIG INTO FOR REVS', infoObj.data.Reviews)
			this.setState({info: data, review: reviews})
		})
	},

	render(){
		//info to populate single restaurant
		let info = this.state.info
		let hood = !info ? null : info.neighborhood
		let cuisine = !info ? null : info.cuisine
		let price = !info ? null : info.cost
		let name = !info ? null : info.name
		let addy = !info ? null : info.address

		//info to populate restaurants reviews
		let review = this.state.review
		let dollars = '$'.repeat(parseInt(price))

		return(
			<div>
				<div>
					<h2>{name}</h2>
					<strong>Neighborhood: </strong> {hood}
					<br/>
					<strong>Address: </strong> {addy}
					<br/>
					<strong>Cuisine: </strong> {cuisine}
					<br/>
					<strong>Cost: </strong> {dollars}
					<br/>
					<h3>Reviews</h3>
						<div>
							<ol>
							{!review ? null : review.map((review, idx) => {
								let stars = '*'.repeat(parseInt(review.rating))
								//console.log('STARS RATING', stars)
								return (
									<li key={idx}>
										<div>
									<strong>Date: </strong>{review.date}
									<br/>
									<strong>Rating: </strong>{stars}
									<br/>
									<strong>Description: </strong>{review.description}
										</div>
									</li>
								)
							})}
							</ol>
						</div>
				</div>
				<ReviewForm paramId={this.props.params.id}/>
			</div>
		)
	}
})

module.exports = RestaurantInfo;