var React = require('react')
var $ = require('jquery')

var Review = React.createClass({
  getInitialState: function (){
    return {

    }
  },
  componentDidMount(){
    let that = this
    let RestaurantId = this.props.params.RestaurantId
    $.ajax({
      url: '/api/restaurants/RestaurantId',
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
  handleChange: function(event){
    event.preventDefault()
    this.setState({input: event.target.value})
  },
  ajaxReview() {
    let that = this
    let RestaurantId = this.props.params.RestaurantId
    $.ajax({
      url: '/api/restaurants/RestaurantId',
      type: 'POST',
      data: {rating:that.state.rating, description: that.state.description, date: that.state.date},
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

        <form onSubmit={this.ajaxReview}>
          <input onChange={this.handleChange} value={this.state.date} type="date"/> <br/>
          <textarea type="text" onChange={this.handleChange} value={this.state.description} placeholder="Describe your experience"/> <br/>
          <select onChange={this.handleChange} >
            <option value="1">*</option>
            <option value="2">**</option>
            <option value="3">***</option>
            <option value="4">****</option>
            <option value="5">*****</option>
          </select><br/>
          <input type="submit" value="Submit Review" />
        </form>
      </div>
    )
  }
});

module.exports = Review
