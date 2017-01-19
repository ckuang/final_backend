var React = require('react')
var $ = require('jquery')
var Restaurants = require('./restaurants')

var Review = React.createClass({
  getInitialState: function (){
    return {date: null, description: '', rating: 0, RestaurantId: this.props.params.id}
  },
  addReview: function(e){
    e.preventDefault()
    $.ajax({
      url: '/api/review',
      method: 'POST',
      data: this.state
    })
    // .done((data) => {
    //   console.log(data)
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
    return (
      <div>
        <form onSubmit={this.addReview}>

          <input type="date" onChange={this.addDate}/> <br/>

          <textarea type="text" onChange={this.addDescription} placeholder="Describe your experience"/> <br/>

          <select value = {this.state.rating} onChange={this.giveRating}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select><br/>
          <input type="submit" value="Submit Review" />
        </form>
      </div>
    )
  }
});

module.exports = Review