import React from 'react';
import $ from 'jquery';

const SingleRestaurant = React.createClass({
getInitialState() {
 return ({restaurant: []})
},

componentDidMount: function () {
	$.ajax({
		url:'/api/restaurants/' + this.props.params.id,
		method:'GET'
	})
	.done((data)=>{
		this.setState({restaurant:data})
	})
},
inputChange(eventType, event){
		event.preventDefault();
		this.setState({[eventType]: event.target.value})
	},
	submitInfo(){
		event.preventDefault();``
		$.ajax({
			url: 'api/review/',
			type: 'POST',
			data: {
				rating: this.state.rating,
				date: this.state.date,
				RestaurantId: this.state.RestaurantId,
				description: this.state.description
			}
		})
	},  
	render() {
	console.log('ARE YOU GETTING DATA Luis',this.state.restaurant)
	return(
		<div className="container">
	      <h1>SINGLE RESTAURANT</h1>
	      <h2>{this.state.restaurant.name}</h2>
	      <h2>{this.state.restaurant.neighborhood}</h2>
	      <h2>{this.state.restaurant.address}</h2>
	      <h2>{this.state.restaurant.cuisine}</h2>
	      <h2>{this.state.restaurant.cost}</h2>
 
				<h3>Write a new review for that restaurant</h3>
				<form onSubmit={this.submitInfo}>
                    <input type='text' placeholder='rating' onChange={this.inputChange.bind(this, 'rating')}
                           value={this.state.rating}/>
                    <br/>
                    <input type='text' placeholder='date' onChange={this.inputChange.bind(this, 'date')}
                           value={this.state.date}/>
                    <br/>
                    <input type='text' placeholder='RestaurantId' onChange={this.inputChange.bind(this, 'RestaurantId')}
                           value={this.state.RestaurantId}/>
                    <br/>
                    <input type='text' placeholder='description' onChange={this.inputChange.bind(this, 'description')}
                           value={this.state.description}/>
                    <br/>

                    <input type='submit' value='Submit'/>
                </form>



				

      </div>
		)
}

})
export default SingleRestaurant;




// <h3>Write a new review for that restaurant</h3>
// 				<form onSubmit={this.submitInfo}>
//                     <input type='text' placeholder='rating' onChange={this.inputChange.bind(this, 'rating')}
//                         value={this.state.rating}/>
//                     <br/>
//                     <input type='text' placeholder='date' onChange={this.inputChange.bind(this, 'date')}
//                            value={this.state.date}/>
//                     <br/>
//                     <input type='text' placeholder='description' onChange={this.inputChange.bind(this, 'description')}
//                            value={this.state.description}/>
//                     <br/>
//                     <input type='submit' value='Submit'/>
//                 </form>
