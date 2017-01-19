import React from 'react'
import $ from 'jquery'
import {Link} from 'react-router'
import NewRestaurant from './newRestaurant.js'

var Restaurants = React.createClass({
	getInitialState(){
		return({data:null})
	},
	componentDidMount(){
		var that = this;
		$.ajax({
			url:'/api/restaurants',
			success:function(data){
				that.setState({data:data})
			}
		})
	},

	render(){
		let data = []
		console.log(this.state.data)
		console.log(this.props)
   
    if(this.state.data) {
      return(
        <div>
        	<h1>YALP</h1>
       		<ul>
       		{
       			this.state.data.map((val,key) => {
						return <li key={key}><Link to={`/restaurants/${val.id}`}>{val.name}</Link></li>
						})
       		}
       		</ul>
       		<NewRestaurant />
        </div>
      )
    } 
    else {
      return(
        <div>Loading...</div>
      )
    }
		
	}
})

export default Restaurants


// ### Restaurants
//   - fetches information on all restaurants
//   - displays information on all restaurants
//   - clicking on a restaurant will bring you to the `Single Restaurant` page
