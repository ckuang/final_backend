import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Restaurants from './Restaurants.jsx';
import RestaurantInfo from './RestaurantInfo.jsx';

const App = (props) => {
		return (
			<div>
			<h2>Lisa Kang || Big Kang Theory || Front End Final</h2>
			{props.children}
			</div>
		)
};


ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Restaurants} />
			<Route path='/restaurants/:id' component={RestaurantInfo}/>
		</Route>
	</Router>,
	document.getElementById('root')
)