import React from 'react';
import axios from 'axios';

const RestaurantForm = React.createClass({
	getInitialState(){
		return {name: '', neighborhood: '', address: '', cuisine: '', cost: 1}
	},

	handleSubmit() {
		//console.log('the clicky werky')
		axios.post('/api/restaurants', {
		name: this.state.name,
    neighborhood: this.state.neighborhood,
    address: this.state.address,
    cuisine: this.state.cuisine,
    cost: this.state.cost
		})
		.then((newRest) => {
			res.send(newRest)
		})
		.catch((err) => {
			console.log("ERROR. No new restaurant added...")
		})
	},

	handleName(e) {
		this.setState({name: e.target.value})
	},
	handleNeighborhood(e) {
		this.setState({neighborhood: e.target.value})
	},
	handleAddress(e) {
		this.setState({address: e.target.value})
	},
	handleCuisine(e) {
		this.setState({cuisine: e.target.value})
	},
	handleCost(e) {
		this.setState({cost: e.target.value})
	},

	render(){
		return (	
			<div>
				<form>
					<input type="text" placeholder="Name" onChange={this.handleName}/>
					<input type="text" placeholder="Neigborhood" onChange={this.handleNeighborhood}/>
					<input type="text" placeholder="Address" onChange={this.handleAddress}/>
					<input type="text" placeholder="Cuisine" onChange={this.handleCuisine}/>
					<select onChange={this.handleCost}>
						<option value="1">$</option>
						<option value="2">$$</option>
						<option value="3">$$$</option>
						<option value="4">$$$$</option>
					</select>
					<input type="submit" value="Add New Restaurant" onClick={this.handleSubmit} />
				</form>
			</div>
		)
	}
})

module.exports = RestaurantForm;