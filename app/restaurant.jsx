var React = require('react')
var $ = require('jquery')
var Review = require('./review.jsx')

let Restaurant = React.createClass({
  getInitialState: function() {
    return ({restaurant: []})
  },
  componentDidMount(){
    let that = this
    
    $.ajax({
      url: '/api/restaurants/:id',
      type: 'GET',
      success: function(data) {
        let resta = data
        let restaurant = that.state.restaurant
        console.log('restaurant:', data)
        that.setState({restaurant: data})
        restaurant.push(resta)
      },
      error: function(error) {
        console.log(error)
      }
    })
  },
  render: function() {
    let stars = ""
    let reviews = []
    if (this.state.restaurant) {
      return (
        <div>
          {this.state.restaurant.map((data) =>
          <li key={data.id}><Link to={`/restaurants/${data.id}`}>{data.name}</Link>
          </li>)}
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
})

module.exports = Restaurant
