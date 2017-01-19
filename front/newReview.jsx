import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

var Review = React.createClass({
   getInitialState: function (){
  return {date: "", rating: "1", description: "", RestaurantId: this.props.idProp}
  },
 handleChange(e){
console.log(e.target.name)
 if(e.target.name === 'date'){
  this.setState({date: e.target.value})
} else if (e.target.name === 'rating'){
  this.setState({rating: e.target.value})
} else if (e.target.name === 'description'){
  this.setState({description: e.target.value})
} 
},
handleReview(e){
  e.preventDefault()
  $.ajax({
    url: '/api/review',
    type: 'POST',
    data: this.state,
    success: ((data)=>{
      console.log(data)
    })
  })
   },
   render: function() {
   this.state ? console.log('STATE:', this.state) : null
     return (
       <div>
       <h3>Write a New Review</h3>
         <form>
                <input type="date"/> <br/>
         <textarea type="text" placeholder="Leave a review of your experience"/> <br/>
        
       

        <br/>
        <br/>
        <select onChange={this.handleChange} name="rating">
             <option value="1">*</option>
             <option value="2">**</option>
             <option value="3">***</option>
             <option value="4">****</option>
             <option value="5">*****</option>
        </select><br/>
     <br/>
    
        <input type="submit" value="Submit Review" onClick={this.handleReview} />
         </form>
       </div>
  )
  }
})

     export default Review;
