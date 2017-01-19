import {connect} from 'react-redux';
import SingleRestaurant from 'SingleRestaurant';

const mapStateToProps = state => ({
  singleRestaurant: state.restaurantReducer.singleRestaurant
})

const SingleRestaurantContainer = connect(mapStateToProps)(SingleRestaurant);

export default SingleRestaurantContainer;