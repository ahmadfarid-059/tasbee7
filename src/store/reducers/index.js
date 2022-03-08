import { combineReducers } from 'redux';
import settingsReducer from './settings';
import favoritesReducer from './favorites';

const reducer = combineReducers({
    favorites: favoritesReducer
  });
  
  export default reducer;