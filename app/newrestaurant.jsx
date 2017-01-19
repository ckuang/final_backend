var React = require('react')
var $ = require('jquery')
var Restaurants = require('./restaurants')
var Restaurant = require('./restaurant')

var NewRestaurant = React.createClass({
  getInitialState: function (){
    return {restaurants: [], name: '', neighborhood: '', address: '', cuisine: '', cost: 0}
  },
  addRestaurant: function(e){
    e.preventDefault()
    $.ajax({
      url: '/api/restaurants',
      method: 'POST',
      data: this.state
    })
  },
  handleChange: function(input, event){
    if(input === 'name'){
      this.setState({name: event.target.value})
    } else if (input === 'neighborhood'){
      this.setState({neighborhood: event.target.value})
    } else if (input === 'address'){
      this.setState({address: event.target.value})
    } else if (input === 'cuisine'){
      this.setState({cuisine: event.target.value})
    }
  },
  updatePrice: function(event){
    this.setState({cost: event.target.value})
  },
  render: function() {
    let $ = ""
    return (
      <div>
        <form onSubmit={this.addRestaurant}>

          <input type="text" 
          placeholder="Name" 
          onChange={this.handleChange.bind(this, "name")} />
          <br />

          <input type="text" 
          placeholder="Neighborhood"
          onChange={this.handleChange.bind(this, "neighborhood")} />
           <br />

          <input type="text" 
          placeholder="Address"
          onChange={this.handleChange.bind(this, "address")}/>
           <br />

          <input type="text" 
          placeholder="Cuisine"
          onChange={this.handleChange.bind(this, "cuisine")}/>
           <br />

          <select value={this.state.cost} onChange={this.updatePrice}>
            <option value="1">1 DOLLAR SIGN</option>
            <option value="2">2 DOLLAR SIGN</option>
            <option value="3">3 DOLLAR SIGN</option>
            <option value="4">4 DOLLAR SIGN</option>
          </select>
           <br />

          <input type="submit" 
          value="Add New Restaurant" />

        </form>
      </div>
    )
  }
});


module.exports = NewRestaurant