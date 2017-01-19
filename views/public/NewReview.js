import React from 'react';
import $ from 'jquery';

const NewReview = React.createClass({

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
	      <h1>New Review</h1>
	      
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

                    <input type='submit' value='Submit'/>
                </form>



				

      </div>
		)
}

})
export default NewReview;


