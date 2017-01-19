import React from 'react';
import axios from 'axios';
import Review from './newReview.jsx';





/*******************************/
// Remember to pass parms.id 


// double check restaurants date and address
/********************************/



const RestaurantInfo = React.createClass({
	getInitialState(){
		return {info: null, review: null}
	},
	componentDidMount(){
		axios.get('/api/restaurants/' + this.props.params.id)
		.then((infoObj) => {
			let data = infoObj.data
			let reviews = infoObj.data.Reviews
			this.setState({info: data, review: reviews})
		})
	},
	render(){
		let info = this.state.info
		let neighborhood = !info ? null : info.neighborhood
		let cuisine = !info ? null : info.cuisine
		let price = !info ? null : info.cost
        let name = !info ? null : info.name
        let location = !info ? null : info.address
        let review = this.state.review
        let dollars = '$'.repeat(parseInt(price))
return(
	<div>
		<div>
			<h2>{name}</h2>
			<strong>Neighborhood: </strong> {neighborhood}
			<br/>
			<strong>Address: </strong> {location}
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
		<Review paramId={this.props.params.id}/>
	</div>
)
	}
})
module.exports = RestaurantInfo; 