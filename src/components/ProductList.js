import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import { getProducts, addItemToCart } from '../actions/cartActions';
import { getUser } from '../actions/userActions';
import CircularIndeterminate from './Preloader';
const ProductList = ({
  cart: { products },
  user: {user},
  getProducts,
  addItemToCart,
  getUser,
}) => {
  useEffect(() => {
    getProducts();
    getUser();
    //eslint-disable-next-line
  }, []);

  if (products === null) {
    return <CircularIndeterminate />;
  }

  return (
    <Box>
      {products.map((product) => (
        <Box mb={6} key={product.id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              action={
                <Box>
                  <Typography color='secondary' fontWeight='bold'>
                    $ {product.price / 100}
                  </Typography>
                </Box>
              }
              title={product.title}
              subheader={product.brand}
            />
            <CardMedia
              component='img'
              height='194'
              sx={{
                objectFit: 'contain',
              }}
              image={product.image}
              alt={product.title}
            />
            <CardContent>
              <Typography variant='body2' color='text.secondary'>
                {product.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Button
                  variant='text'
                  onClick={() =>
                    addItemToCart({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.image,
                    })
                  }
                >
                  Add to cart
                </Button>
                <IconButton aria-label='add to favorites'>
                  <FavoriteIcon />
                </IconButton>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

ProductList.propTypes = {
  cart: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ cart: state.cart, user: state.user });

export default connect(mapStateToProps, {
  getProducts,
  addItemToCart,
  getUser,
})(ProductList);
