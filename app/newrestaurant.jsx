var React = require('react')
var $ = require('jquery')

var NewRestaurant = React.createClass({
  getInitialState: function (){
    return {input:"", restaurants:[]}
  },
  handleChange: function(event){
    event.preventDefault()
    this.setState({input: event.target.value})
  },
  ajaxPost(){
    let that = this
    $.ajax({
      url: '/api/restaurants',
      type: 'POST',
      data: {name: this.state.name,neighborhood:this.state.neighborhood,address:this.state.address,cuisine:this.state.cuisine, value:this.state.value},
      success: function(data) {
        console.log('***restaurants:', data)
      },
      error: function(error) {
        console.log(error)
      }
    })
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.ajaxPost}>
          <input type="text" onChange={this.handleChange} value={this.state.name} placeholder="Name"/>
          <input type="text" onChange={this.handleChange} value={this.state.neighborhood} placeholder="Neighborhood"/>
          <input type="text" onChange={this.handleChange} value={this.state.address} placeholder="Address"/>
          <input type="text" onChange={this.handleChange} value={this.state.cuisine} placeholder="Cuisine"/>
          <select onChange={this.handleChange}>
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
});


module.exports = NewRestaurant
