var React = require('react')
var $ = require('jquery')
//var Review = require('./review.jsx')
var Restaurants = require('./restaurants.jsx') 

let Restaurant = React.createClass({
  getInitialState: function() {
    return ({restaurant: null, reviews: [], RestaurantId: this.props.params.id, date: null, description: '', rating: 0})
  },
  componentDidMount: function(){
    $.ajax({
      url: '/api/restaurants/' + this.props.params.id,
      method: 'GET'
    })
    .done((data) => {
      console.log(data)
      this.setState({restaurant: data, reviews: data.Reviews})
    })
  },
  addReview: function(e){
    e.preventDefault()
    $.ajax({
      url: '/api/review',
      method: 'POST',
      data: this.state
    })
    // .done((review) => {
    //   console.log(review)
    // })
  },
  addDate: function(event){
    this.setState({date: event.target.value})
  },
  addDescription: function(event){
    this.setState({description: event.target.value})
  },
  giveRating: function(event){
    this.setState({rating: event.target.value})
  },
  render: function() {
    let stars = ""
    let reviews = []
    if (this.state.restaurant) {
      return (
        <div>
          <h1>{this.state.restaurant.name}</h1>
  
          <p><strong>Neighborhood: </strong>{this.state.restaurant.neighborhood}</p>
          <p><strong>Address:</strong> {this.state.restaurant.address}</p>
          <p><strong>Cuisine: </strong>{this.state.restaurant.cuisine}</p>
          <p><strong>Cost: </strong>{this.state.restaurant.cost}</p>

          <h3>Reviews</h3>

          <ol>
            {this.state.restaurant.Reviews.map((val) => {
              return(
                <li key={val.id}>
                <br/>
                <p><strong>Date:</strong>{val.date}</p>
                <p><strong>Description: </strong>{val.description} </p>
                <p><strong>Rating:</strong> {val.rating}</p> 
                </li>
              )
            })}
          </ol>

          <h3>Write a New Review</h3>
          
        <form onSubmit={this.addReview}>

          <input type="date" onChange={this.addDate}/> <br/>

          <textarea type="text" onChange={this.addDescription} placeholder="Describe your experience"/> <br/>

          <select value={this.state.rating} onChange={this.giveRating}>
            <option value="1">*</option>
            <option value="2">**</option>
            <option value="3">***</option>
            <option value="4">****</option>
            <option value="5">*****</option>
          </select>
          <br/>

          <input type="submit" value="Submit Review" />
        </form>
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