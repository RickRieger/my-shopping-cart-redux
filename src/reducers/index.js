import { combineReducers } from 'redux';
import shoppingCartReducer from './shoppingCartReducer';
import userReducer from './userReducer'

export default combineReducers({
  cart: shoppingCartReducer,
  user: userReducer,
});
