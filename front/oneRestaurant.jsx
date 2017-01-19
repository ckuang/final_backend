import React from 'react'
import $ from 'jquery'
import {Link} from 'react-router'
import newRestaurant from './newRestaurant.jsx'

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
       		<newRestaurant />
        </div>
      )
    } 
    else {
      return(
        <div> Nothing please, wait</div>
      )
    }
		
	}
})
export default Restaurants