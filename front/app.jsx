import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import newRestaurant from './newRestaurant.jsx';
import Review from './newReview.jsx';
import RestaurantInfo from './restaurantsINFO.jsx';
import Restaurants from './oneRestaurant.jsx';

const App = (props) => {
   return (
     <div>
     <h2> Yalp Restaurants</h2>
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
document.getElementById('root'))


