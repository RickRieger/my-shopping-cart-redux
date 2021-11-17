// CreateStore does what it says, because we are using the thunk middleware we bring in applyMiddleware from redux.
import { createStore, applyMiddleware } from 'redux';
// Dev tools ext. are being used so we bring this in.
import { composeWithDevTools } from 'redux-devtools-extension';
// Middleware for async func
import thunk from 'redux-thunk';
// Create the rootReducer outside of this file
import rootReducer from './reducers';
// Initial app level state.
const initialState = {};
// Any middleware we use.
const middleWare = [thunk];
// This creates the store bringing in reduce, initialState, devTools and middleware.
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
