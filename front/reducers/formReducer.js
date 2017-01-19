import {CREATE_RESTAURANT, CREATE_REVIEW} from 'actionTypes';

let _init = {
  name: null,
  neighborhood: null,
  address: null,
  cuisine: null,
  cost: null,
  date: null,
  rating: null,
  description: null
}

function formReducer(state = _init, action) {
  let stateCopy = Object.assign({}, state);
  switch (action.type) {
    case CREATE_RESTAURANT:
      stateCopy[action.name] = action.value;
      return stateCopy;
    case CREATE_REVIEW:
      stateCopy[action.name] = action.value;
    default: 
      return stateCopy;
  }
}

export default formReducer;