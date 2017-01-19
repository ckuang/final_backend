import React from 'react';
import ReactDOM from 'react-dom';

var NewRestaurant = React.CreateClass({
  render: function (){
    return(
      <div>
        <form>
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Neighborhood"/>
          <input type="text" placeholder="Address"/>  
        </form>

        <select>

        </select>
        <select>

        </select>
      </div>
    )
  }
})

export default NewRestaurant;
