import {
  GET_PRODUCTS,
  GET_SHOPPING_CART,
  GET_SHOPPING_CART_TOTAL,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  PRODUCTS_ERROR,
} from './types';

export const getProducts = () => async (dispatch) => {
  try {
    const res = await fetch('/products');
    const data = await res.json();
    dispatch({
      type: GET_PRODUCTS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: err,
    });
  }
};

export const addItemToCart = (item) => (dispatch) => {
  const { id, title, price, image } = item;
  dispatch({
    type: ADD_TO_CART,
    payload: {
      id,
      title,
      price,
      image,
    },
  });
};

export const removeFromCart = (itemId) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      itemId,
    },
  });
};

export const handleIncrement = (itemId) => (dispatch) => {
  dispatch({
    type: INCREMENT_QUANTITY,
    payload: {
      itemId,
    },
  });
};

export const handleDecrement = (itemId) => (dispatch) => {
  dispatch({
    type: DECREMENT_QUANTITY,
    payload: {
      itemId,
    },
  });
};

export const emptyCart = (n) => (dispatch) => {
  dispatch({
    type: EMPTY_CART,
  });
};
