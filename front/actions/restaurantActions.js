// import store
import store from 'store';
// import action types
import {DISPLAY_RESTAURANTS, 
        DISPLAY_SINGLE_RESTAURANT} from 'actionTypes';

export function displayRestaurantsList(restaurants) {
  store.dispatch({
    type: DISPLAY_RESTAURANTS,
    restaurants
  })
}

export function displaySingleRestaurant(restaurant) {
  store.dispatch({
    type: DISPLAY_SINGLE_RESTAURANT,
    restaurant
  })
}