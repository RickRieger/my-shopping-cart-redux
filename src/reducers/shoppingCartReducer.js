import {
  GET_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from '../actions/types';

const initialState = {
  shoppingCart: [],
  products: null,
  shoppingCartTotal: null,
  productError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      console.log('reducer working');
      return {
        ...state,
        products: action.payload,
      };
    // case PRODUCTS_ERROR:
    //   console.error(action.payload);
    //   return {
    //     ...state,
    //     error: action.payload,
    //     loading: false,
    //   };
    case ADD_TO_CART:
      const { id, title, price, image } = action.payload;
      console.log(state);
      const itemFound = state.shoppingCart.find((item) => item.id === id);

      if (itemFound) {
        itemFound.quantity = itemFound.quantity + 1;
        return {
          ...state,
          shoppingCart: [
            ...state.shoppingCart.filter(
              (item) => item.id !== action.payload.id
            ),
            itemFound,
          ],
        };
      }
      return {
        ...state,
        shoppingCart: [
          ...state.shoppingCart,
          {
            id,
            title,
            price,
            image,
            quantity: 1,
            timestamp: Date.now(),
          },
        ],
      };

    case INCREMENT_QUANTITY:
      const incrementItemFound = state.shoppingCart.find(
        (item) => item.id === action.payload.itemId
      );
      incrementItemFound.quantity = incrementItemFound.quantity + 1;

      return {
        ...state,
        shoppingCart: [
          ...state.shoppingCart.filter((item) => item.id !== action.payload.id),
        ],
      };
    case DECREMENT_QUANTITY:
      const decrementItemFound = state.shoppingCart.find(
        (item) => item.id === action.payload.itemId
      );
      decrementItemFound.quantity = decrementItemFound.quantity - 1;

      return {
        ...state,
        shoppingCart: [
          ...state.shoppingCart.filter((item) => item.id !== action.payload.id),
        ],
      };

    case REMOVE_FROM_CART:
      const index = state.shoppingCart
        .map((obj) => obj.id)
        .indexOf(action.payload.itemId);

      if (index >= 0) {
        state.shoppingCart.splice(index, 1);
      }

      return {
        shoppingCart: state.shoppingCart,
      };
    case EMPTY_CART:
      console.log('empty PAB');
      return { ...state, shoppingCart: [] };

    default:
      return state;
  }
};
