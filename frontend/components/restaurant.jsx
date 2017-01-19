import React from 'react';
import $ from 'jquery';
import newRestaurant  from './newRestaurant.jsx';

const Restaurant = React.createClass({
getInitialState(){
	return({allResturants: []})
},
componentDidMount(){
	$.ajax({
		url: '/api/restaurants',
		type:'GET',
		success: ((data)=>{
			data ? this.setState({allResturants:data}) : console.log('Error with restaurants object')
		})
	})
},
	render(){
	let RestaurantDisplay = this.state.allResturants.map((value, index))=>{
		return <ol key={index}><h1>{value.name}</h1></ol>
	})
		return (
		<div>
		<center>
		<h1> YALP</h1> 
		{RestaurantDisplay}
		<newRestaurant/>
		</center>
		</div>
		)
	}
})

export default Restaurant;