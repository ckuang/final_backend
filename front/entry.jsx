import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'
import App from './app.js'
import Restaurants from './component/restaurant.js'
import SingleRestaurant from './component/singleRestaurant.js'



render(
	<Router history = {browserHistory}>
		<Route path='/' component={App}>
		<Route path='/restaurants' component={Restaurants}/>
		<Route path='/restaurants/:id' component={SingleRestaurant}/>
		</Route>
	</Router> ,
	document.getElementById('root')
	)
