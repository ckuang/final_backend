import {combineReducers} from 'redux';
import restaurantReducer from 'restaurantReducer';
import formReducer from 'formReducer';

const rootReducer = combineReducers({
  restaurantReducer,
  formReducer
});

export default rootReducer;