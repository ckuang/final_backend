import {DISPLAY_RESTAURANTS, 
        DISPLAY_SINGLE_RESTAURANT,
        GET_NEW_RESTAURANT} from 'actionTypes';

let _init = {
  restaurants: null,
  singleRestaurant: null,
  newRestaurant: null
}

function restaurantReducer(state = _init, action) {
  let stateCopy = Object.assign({}, state);
  switch(action.type) {
    case DISPLAY_RESTAURANTS:
      stateCopy.restaurants = action.restaurants
      return stateCopy;
    case DISPLAY_SINGLE_RESTAURANT:
      stateCopy.singleRestaurant = action.restaurant;
      return stateCopy;
    case GET_NEW_RESTAURANT:
      stateCopy.newRestaurant = action.restaurant
    default:
      return stateCopy;
  }
}

export default restaurantReducer;