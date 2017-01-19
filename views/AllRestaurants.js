import {Link} from 'react-router'
var React = require('react')
	, ReactDOM = require('react-dom')
	, $ = require('jquery')

const AllRestaurants = React.createClass({
	getInitialState(){
		return {
			restaurantInfo: null
		}
	},
	componentDidMount(){
		$.ajax({
			url: '/api/restaurants/',
			type: 'GET',
		})
		.done((data)=>this.setState({data:data}))
	},
	inputChange(eventType, event){
		event.preventDefault();
		this.setState({[eventType]: event.target.value})
	},
	submitInfo(){
		event.preventDefault();``
		$.ajax({
			url: '/api/restaurants/',
			type: 'POST',
			data: {
				name: this.state.name,
				neighborhood: this.state.neighborhood,
				address: this.state.address,
				cuisine: this.state.cuisine,
				cost: this.state.cost
			}
		})
	},
	render(){
		console.log('from data:',this.state.data)
		return(
			<div>
				<h3>All Restaurants </h3>
				<ol>
					{this.state.data ? 
						(this.state.data.map((restaurant, index)=>
							<li key={index}>
								
								{/*Name: {restaurant.name}*/}
								<Link to={'/restaurants/' +restaurant.id}><h2>{restaurant.name}</h2> 
								</Link>
								
								<br/><br/>
							</li>
						)) :
						 <p>no RestaurantInfo found</p>
					}
				</ol>

				<h3>Create A New Restaurant</h3>
				<form onSubmit={this.submitInfo}>
                    <input type='text' placeholder='name' onChange={this.inputChange.bind(this, 'name')}
                           value={this.state.name}/>
                    <br/>
                    <input type='text' placeholder='neighborhood' onChange={this.inputChange.bind(this, 'neighborhood')}
                           value={this.state.neighborhood}/>
                    <br/>
                    <input type='text' placeholder='address' onChange={this.inputChange.bind(this, 'address')}
                           value={this.state.address}/>
                    <br/>
                    <input type='text' placeholder='cuisine' onChange={this.inputChange.bind(this, 'cuisine')}
                           value={this.state.cuisine}/>
                    <br/>
                    <input type='text' placeholder='cost' onChange={this.inputChange.bind(this, 'cost')}
                           value={this.state.cost}/>
                    <br/>
                    <input type='submit' value='Submit'/>
                </form>

			</div>
		)
	}
})

export default AllRestaurants;