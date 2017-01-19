//Import Modules 
import React from 'react';
import { render } from 'react-dom';

//Import React-Router Dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//Import Components
import App from './App';
import Restaurants from './Restaurants';
import IndividualRestaurant from './IndividualRestaurant';

//Build Router Component
const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Restaurants} />
			<Route path="/:id" component={IndividualRestaurant} />
		</Route>
	</Router>
);

//Render Component
render(router, document.getElementById('root'));