import React from 'react';
import {Link} from 'react-router';
import {ajax} from 'jquery';

const Restaurants = React.createClass({
  getInitialState(){
    return {restaurants: [], name: '', neighborhood: '', address: '', cuisine: '', cost: '1'}
  },
  componentDidMount(){
    ajax({
      url: '/api/restaurants',
      type: 'GET',
    })
    .done((restaurants) => {
      this.setState({restaurants})
    })
  },
  handleChange(type, e){
    this.setState({[type]: e.target.value})
  },
  handleSubmit(e){
    e.preventDefault();

    let state = this.state;
    let {name, neighborhood, address, cuisine, cost} = state;

    ajax({
      url: '/api/restaurants',
      type: 'POST',
      data: {name, neighborhood, address, cuisine, cost: parseInt(cost)}
    }).done((restaurant) => {
      let restaurants = state.restaurants.slice()
      restaurants.push(restaurant)

      this.setState({restaurants: restaurants, name: '', neighborhood: '', address: '', cuisine: '', cost: ''})
    })
  },
  render(){
    let restaurants = this.state.restaurants;

    return (
      <div>
        <ol>
          {
            restaurants.map((restaurant, indx) => {
              return <li key={indx}><Link to={`/${restaurant.id}`}>{restaurant.name}</Link></li>
            })
          }
        </ol>

        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" onChange={this.handleChange.bind(this, 'name')} value={this.state.name} />
          <input type="text" placeholder="Neighborhood" onChange={this.handleChange.bind(this, 'neighborhood')} value={this.state.neighborhood} />
          <input type="text" placeholder="Address" onChange={this.handleChange.bind(this, 'address')} value={this.state.address} />
          <input type="text" placeholder="Cuisine" onChange={this.handleChange.bind(this, 'cuisine')} value={this.state.cuisine} />

          <select onChange={this.handleChange.bind(this, 'cost')} value={this.state.cost}>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>

          <input type="submit" value="Add New Restaurant" />
      </form>
      </div>
    )
  }
})

export default Restaurants
