import React from 'react';
import ReactDOM from 'react-dom';	
import SingleRestaurant from './SingleRestaurant.js';	
import AllRestaurants from './AllRestaurants.js';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';	

var App = React.createClass({
	render(){
		return(
			<div>
				
				{this.props.children} 
			</div>
		)
	}
})


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
	  <IndexRoute component={AllRestaurants} />
      <Route path="/restaurants/:id" component={SingleRestaurant} />
    
    </Route>
  </Router>,
  document.getElementById('root')
  )
