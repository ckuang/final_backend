import React from 'react'
import $ from 'jquery'
import {Link} from 'react-router'

var NewReview = React.createClass({
	getInitialState(){
		return({description:'', date:'', rating:'', RestaurantId:this.props.id})
	},
	handleChange(e){
		this.setState({description:e.target.value})
		console.log(e.target.value)
	},
	handleDate(e){
		this.setState({date:e.target.value})
		console.log(e.target.value)
	},
	handleRating(e){
		this.setState({rating:e.target.value})
		console.log(e.target.value)
	},
	handleSubmit(){
		var that = this
		$.ajax({
			url:'/api/review',
			type:'POST',
			data:that.state,
			success:function(){
				console.log('successful')
			}
		})
	},
	render(){
		console.log(this.state)
		let arr = [1,2,3,4,5]
		return(
			<div>
				<form id='review' onSubmit={this.handleSubmit}>	
					<input type="date" onChange={this.handleDate} value={this.state.date}/>
						<br/>
					<input type="text" placeholder='Describe your experience' onChange={this.handleChange} value={this.state.description}/>
						<br/>
					<select onChange={this.handleRating} form='review'>
						{ 
							arr.map((val,key) => {
								return <option key={key}>{val}</option>
							})
						}
					</select>
					<input type="submit"/>
				</form>
			</div>
			)
	}
})

export default NewReview


// ### New Review
//   - form with 1 drop-down option field, 1 date/calendar field, 1 text field
//   - sends form data off to the server to create a new review (don't forget to also the ID of the restaurant the review is for!)
//   - on successful creation, you'll be redirected back to the `Single Restaurant` page