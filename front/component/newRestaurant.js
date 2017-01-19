import React from 'react';
import $ from "jquery";

var NewRestaurant = React.createClass({
	getInitialState(){
		return({name:'', neighborhood:'',address:'',cuisine:'',cost:""})
	},
	handleSubmit(){
		var that = this
		$.ajax({
			url:'/api/restaurants',
			type:"POST",
			data:that.state,
			success:function(){
				console.log('successful')
			}
		})
	},
	handleName(e){
		this.setState({name:e.target.value})
	},
	handleNeighborhood(e){
		this.setState({neighborhood:e.target.value})
	},
	handleAddress(e){
		this.setState({address:e.target.value})
	},
	handleCuisine(e){
		this.setState({cuisine:e.target.value})
	},
	handleCost(e){
		this.setState({cost:e.target.value})
	},
	render(){
		let arr= [1,2,3,4]
		return(
			<div>
				<form id='NewRestaurant' onSubmit={this.handleSubmit}>
					<input type="text" placeholder='Name' onChange={this.handleName} value={this.state.name}/>
					<input type="text" placeholder='Neighborhood' onChange={this.handleNeighborhood} value={this.state.neighborhood}/>
					<input type="text" placeholder='Address' onChange={this.handleAddress} value={this.state.address}/>
					<input type="text" placeholder='Cuisine' onChange={this.handleCuisine} value={this.state.cuisine}/>

					<select id="NewRestaurant" onChange={this.handleCost} value={this.state.cost}>
					{
						arr.map((val,key) => {
							return <option key={key}>{val}</option>
						})
					}
					</select>
					<input type='submit'/>
				</form>
			</div>
			)
	}
})

export default NewRestaurant


// ### New Restaurant
//   - form with 3 text fields and 2 drop-down option fields
//   - on successful creation, you'll be redirected to the `Single Restaurant` page


