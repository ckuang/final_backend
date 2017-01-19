import React from 'react';
import ReactDOM from 'react-dom';

var Restaurants = React.CreateClass({
  render: function (){
    return(
      <div>
        <h1>Hello</h1>
        <h2>{this.state.restaurant}</h2>
      </div>
    )
  }
})

export default Restaurants;
