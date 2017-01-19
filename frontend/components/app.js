import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

import Restaurants from ("../components/restaurants");
import NewRestaurant from ("../components/newRestaurant");

var App = React.createClass({
  render: function(){
    return(
      <div>
      {this.props.children}
      </div>
    )
  },

  ReactDOM.render (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="restaurants" component={Restaurants}/>
        <Route path="newRestaurant" component={NewRestaurant}/>
          <Route path="" component={}/>
        </Route>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>,
    document.getElementById("root")
  );
