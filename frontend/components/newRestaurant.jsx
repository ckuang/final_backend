import React from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';

//make sure you turn the string into a number when passing in the cost part 
const newRestaurant = React.createClass({
getInitialState(){
	return({name: , neighborhood:, address: '', cuisine:'', cost: ''})
},
nameChange(e){
	this.setState({name:this.state.name})
},
neighborhoodChange(e){
	this.setState({neighborhood:this.state.neighborhood})
},
addressChange(e){
	this.setState({address:this.state.address})
},
cuisineChange(e){
	this.setState({cuisine:this.state.cuisine})
},
costChange(e){
	this.setState({cost:parseInt(this.state.cost)})
},
componentDidMount(){
	$.ajax({
		url: '/api/restaurants',
		type: 'POST',
		data: this.state
	})
}, 
onSubmit(e){
	e.preventDefault();
	browserHistory.push('/singlerestaurant');
},
	render(){
		return(
		<div>
		<h1> Create New Restaurant </h1> 
			<form onSubmit={this.onSubmit}>
			<input type="text" value={this.state.name} onChange={this.nameChange}></input>
			<input type="text" value={this.state.neighborhood} onChange={this.neighborhood}></input>
			<input type="text" value={this.state.address} onChange={this.addressChange}></input>
			<input type="text" value={this.state.cuisine} onChange={this.cuisineChange}></input>
			<fieldset>
				<select id="cost">
				<option value = "$">$</option>
				<option value = "$$">$$</option>
				<option value = "$$$">$$$</option>
				<option value = "$$$$">$$$$</option>
				</select>
				<input type="button" value={this.state.cost} onChange={this.costChange} onclick={this.costChange}/>
			</fieldset>
			<input type="submit" value="Add New Restaurant"/>
			</form>
		</div>
		)
	}
})


export default newRestaurant; 