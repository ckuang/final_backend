var React = require('react')
var $ = require('jquery')
var NewRestaurant = require('./newrestaurant.jsx')
import {Link} from 'react-router'

let Restaurants = React.createClass({
  getInitialState: function() {
    return({restaurants: null, expanded: false})
  },
  expand (){
    const expanded = this.state.expanded
    this.setState({expanded: !expanded})
  },
  componentDidMount(){
    let that = this
    $.ajax({
      url: '/api/restaurants',
      type: 'GET',
      success: function(data) {
        console.log('restaurants:', data)
        that.setState({restaurants: data})
      },
      error: function(error) {
        console.log(error)
      }
    })
  },
  render: function() {
    let restaurants = []
    if (this.state.restaurants) {
      return(
        <div>
          <h1>YALP</h1>
            {this.state.restaurants.map((data) =>
            <li key={data.id}><Link to={`/restaurants/${data.id}`}>{data.name}</Link></li>)}
            {this.props.children}
          <NewRestaurant />
        </div>
      )
    } else {
      return(
        <div>Loading...</div>
      )
    }
  }
})

module.exports = Restaurants
