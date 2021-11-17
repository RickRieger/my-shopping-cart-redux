import React from 'react';

function useShoppingCartTotal(shoppingCart) {
  const total = shoppingCart.reduce((accumulator, item, index, array) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  return total;
}

export default useShoppingCartTotal;
