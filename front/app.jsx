import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import Restaurant from './newRestaurant.jsx';
import Review from './newReview.jsx';
import oneRestaurant from './oneRestaurant.jsx';
import infoRestaurant from './infoRestaurant.jsx';



var App = React.createClass({
  render: function(){
    return(
    	<div>
      Is it working 
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={browserHistory}>
  </Router>,
  document.getElementById('root'))
    