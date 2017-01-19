import React from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
import Restaurant from './restaurant.jsx';


const Review = React.createClass({
getInitialState(){
	return ({rating: '', date: '', description: ''})
},
ratingChange(e){
 	this.setState({rating: this.state.rating})
},
dateChange(e){
	this.setState({date: this.state.date})
},
descriptionChange(e){
	this.setState({description:this.state.description})
},
onSubmit(e){
	e.preventDefault();
	browserHistory.push('/singlerestaurants')
}
componentDidMount(){
 	$.ajax({
 		url:'/api/review/' + this.props.RestaurantId,
 		type: 'POST',
 		data: this.state
 	})
},
	render(){
		return (
		<div>
		<h1> Reviews </h1> 
		<form onSubmit={this.onSubmit}>
		<input type="text" value={this.state.date} onChange={this.dateChange}></input>
		<input type="text" value={this.state.description} onChange={this.descriptionChange}></input>
		<fieldset>
				<select id="ratings">
				<option value = "*">*</option>
				<option value = "**">**</option>
				<option value = "***">***</option>
				<option value = "****">****</option>
				<option value = "*****">*****</option>
				</select>
			<input type="button" onClick={this.ratingChange} value={this.state.rating}/>
		</fieldset>
		</form>
		</div>
		)
	}
})

export default Review;