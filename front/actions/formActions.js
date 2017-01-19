import store from 'store';

import {CREATE_RESTAURANT, GET_NEW_RESTAURANT, CREATE_REVIEW} from 'actionTypes';

export function createNewRestaurant(name, value) {
  store.dispatch({
    type: CREATE_RESTAURANT,
    name,
    value
  })
}

export function getNewRestaurant(restaurant) {
  store.dispatch({
    type: GET_NEW_RESTAURANT,
    restaurant
  })
}

export function createReview(name, value) {
  store.dispatch({
    type: CREATE_REVIEW,
    name,
    value
  })
}