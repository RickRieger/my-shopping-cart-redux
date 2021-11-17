import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import useShoppingCartTotal from '../utils/useShoppingCartTotal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import Layout from '../components/Layout';
import ReplayIcon from '@mui/icons-material/Replay';
import {
  handleIncrement,
  handleDecrement,
  removeFromCart,
  emptyCart,
} from '../actions/cartActions';

const CartPage = ({
  cart: { shoppingCart },
  handleIncrement,
  handleDecrement,
  removeFromCart,
  emptyCart,
}) => {
  const total = useShoppingCartTotal(shoppingCart);

  // if (shoppingCart.length < 1) {
  //   return <Layout>theres no items to show here</Layout>;
  // }

  return (
    <Layout>
      <Box>
        {shoppingCart.map((item) => (
          <Box key={item.id} mb={4}>
            <CartItem
              item={item}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              removeFromCart={removeFromCart}
            />
          </Box>
        ))}
      </Box>
      <Box display='flex' flexDirection='column' alignItems='center' mt={6}>
        <Box mb={2}>
          <Typography fontWeight='bold'>Total: $ {total / 100}</Typography>
        </Box>
        <Box mb={2}>
          <Button
            variant='contained'
            onClick={emptyCart}
            startIcon={<ReplayIcon />}
          >
            Empty Cart
          </Button>
        </Box>
        <Box mb={2}>
          <Link to='/'>
            <Button variant='contained'>Back to home</Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
};

CartPage.propTypes = {
  cart: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ cart: state.cart });

export default connect(mapStateToProps, {
  handleIncrement,
  handleDecrement,
  removeFromCart,
  emptyCart,
})(CartPage);
