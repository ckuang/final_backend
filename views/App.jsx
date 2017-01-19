import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Header from './components/Header'
import Restaurants from './containers/Restaurants';
import RestaurantContainer from './containers/RestaurantContainer';

const App = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={Header}>
      <IndexRoute component={Restaurants} />
      <Route path=":id" component={RestaurantContainer} />
    </Route>
  </Router>
)

render(<App />, document.getElementById('app'));
