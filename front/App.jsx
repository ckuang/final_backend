import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from 'store';

import RestaurantsContainer from 'RestaurantsContainer';
import SingleRestaurantContainer from 'SingleRestaurantContainer';
import NewRestaurantContainer from 'NewRestaurantContainer';
import NewReviewContainer from 'NewReviewContainer';

const App = props => {
  const {list, newRest} = props;
  return (
    <div>
      <h1>Hello Word</h1>
      {props.children}
      {list}
      {newRest}
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
     <Route path="/" component={App}> 
       <Route path="/restaurants" components={
        {list: RestaurantsContainer,
        newRest: NewRestaurantContainer}
      }/>
       <Route path="/singlerestaurants/(:id)" component={SingleRestaurantContainer}/>
       <Route path="/newrestaurant" component={NewRestaurantContainer}/>
       <Route path="/newreview" component={NewReviewContainer}/>
     </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)