import { Container, Grid, Typography } from "@material-ui/core";

import React from "react";
import { Link } from "react-router-dom";
import FilledCart from "./FilledCart";
import useStyles from "./styles";
function Cart({ cart, updateQuantityOfCartItem, removeFromCart, deleteCart }) {
  const classes = useStyles();
  const cartIsEmpty = !cart.length;
  //   =============================
  // ===============================
  const EmptyCart = () => {
    return (
      <Typography variant="subtitle2">
        <Link to="/" className={classes.link}>
          Add first to cart!
        </Link>
      </Typography>
    );
  };

  //   ====================================
  // =======================================

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3">
        Shopping Cart
      </Typography>
      <div className={classes.toolbar} />

      {cartIsEmpty ? (
        <EmptyCart />
      ) : (
        <FilledCart
          cart={cart}
          updateQuantityOfCartItem={updateQuantityOfCartItem}
          removeFromCart={removeFromCart}
          deleteCart={deleteCart}
        />
      )}
    </Container>
  );
}

export default Cart;
