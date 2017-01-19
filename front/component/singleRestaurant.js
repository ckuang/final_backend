import React from 'react'
import $ from 'jquery'
// import moment from 'moment'
import NewReview from './newReview.js'

var SingleRestaurant = React.createClass({
	getInitialState(){
		return({data:null})
	},
	componentDidMount(){
		var that = this;
		$.ajax({
			url:`/api/restaurants/${this.props.params.id}`,
			success:function(data){
				that.setState({data:data})
			}
		})
	},
	render(){
		let data = []
		//need to bracket into the id property
		console.log(this.props.params)

		let info = this.state.data
		console.log(info)

	
		if(info){
		return(
			<div>
			<h3>{info.name}</h3>
				<br/>
			<h5>Neighborhood:{info.neighborhood}</h5>
			<h5>Address:{info.address}</h5>
			<h5>Cuisine:{info.cuisine}</h5>
			<h5>Cost:{info.cost}</h5>
				<br/>
			<h3>Reviews</h3>
				<br/>
				{
					info.Reviews.map((val,key) =>{
						return <h5 key={key}>{key + 1}.Date:{val.date}<br/>Rating:{val.rating}<br/>Description:{val.description}</h5>
					})
			  }
			  <h3>Write a New Review</h3>

			  <NewReview id={this.props.params.id}/>

			</div>
			)
	} else {
		return(
			<div>
			...Loading
			</div>
			)
	}
	}
})

export default SingleRestaurant


// ### Single Restaurant
//   - fetches information on a single restaurant with all associated reviews
//   - displays all restaurant information along with all the reviews for that restaurant


