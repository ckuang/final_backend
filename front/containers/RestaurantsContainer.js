import {connect} from 'react-redux';
import Restaurants from 'Restaurants';

const mapStateToProps = state => ({
  restaurants: state.restaurantReducer.restaurants
})

const RestaurantsContainer = connect(mapStateToProps)(Restaurants);

export default RestaurantsContainer;