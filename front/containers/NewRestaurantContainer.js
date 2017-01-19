import {connect} from 'react-redux';
import NewRestaurant from 'NewRestaurant';

const mapStateToProps = state => ({
  name: state.formReducer.name,
  neighborhood: state.formReducer.neighborhood,
  address: state.formReducer.address,
  cuisine: state.formReducer.cuisine,
  cost: state.formReducer.cost,
  restaurant: state.restaurantReducer.singleRestaurant
})

const NewRestaurantContainer = connect(mapStateToProps)(NewRestaurant);

export default NewRestaurantContainer;