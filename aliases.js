module.exports = {
// store
  store: 'front/store',

// actions
  actionTypes: 'front/actions/types',
  restaurantActions: 'front/actions/restaurantActions',
  formActions: 'front/actions/formActions',

// components
  Restaurants: 'front/components/Restaurants',
  SingleRestaurant: 'front/components/SingleRestaurant',
  NewRestaurant: 'front/components/NewRestaurantForm',
  NewReview: 'front/components/NewReview',

// containers
  RestaurantsContainer: 'front/containers/RestaurantsContainer',
  SingleRestaurantContainer: 'front/containers/SingleRestaurantContainer',
  NewRestaurantContainer: 'front/containers/NewRestaurantContainer',
  NewReviewContainer: 'front/containers/NewReviewContainer',

// reducers
  rootReducer: 'front/reducers/rootReducer',
  restaurantReducer: 'front/reducers/restaurantReducer',
  formReducer: 'front/reducers/formReducer'
}