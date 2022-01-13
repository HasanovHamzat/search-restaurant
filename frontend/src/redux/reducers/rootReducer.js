import { combineReducers } from 'redux'
import favouritesReducer from './favouritesReducer';
import personReducer from './personReducer';
import restaurantReducer from './restaurantReducer';


const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  favourites: favouritesReducer,
  persons: personReducer,
})

export default rootReducer;
