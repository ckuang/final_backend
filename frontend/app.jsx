import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, browserHistory, Link, IndexRoute} from 'react-router';


const App = React.createClass({
	render(){
		return(
		<div>
		<h1> Main Resturant Page </h1>
		</div>
		)
			{this.props.children}
	}
})

ReactDOM.render(
<Router>
	<Route history={browserHistory}/>
	<Route path="/" component={App}/>
		<IndexRoute component={App}/>
		<Route path="/singlerestaurant/:id" component={singleRestaurant}/>
		<Route path="/restaurants" component={Restaurant}/>
	<Route/>
</Router>,
document.getElementById('root')
);