import React from "react";
import { AddShoppingCart } from "@material-ui/icons";
import {
  Card,
  CardActions,
  Typography,
  IconButton,
  CardMedia,
  CardContent,
} from "@material-ui/core";

import useStyles from "./styles";
import useMethod from "../../../Methods/useMethod";
import { Link } from "react-router-dom";
import { useStateValue } from "../../../State/StateProvider";
// ============================
// ==============================
export default function Product({ product }) {
  const [state, dispatch] = useStateValue();
  const classes = useStyles();
  const { addToCustomerCart } = useMethod();
  return (
    <Card className={classes.root}>
      <Link
        className={classes.contentLink}
        to={{
          pathname: `/product-description/`,
          state: {
            product: product,
          },
        }}
      >
        <CardMedia
          className={classes.media}
          image={product.picture}
          title={product.product_name}
        />

        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.product_name}
            </Typography>
            <Typography variant="h5">৳ {product.price}</Typography>
          </div>
          <Typography variant="body3" color="textSecondary">
            {product.description}
          </Typography>
        </CardContent>
      </Link>

      {state.customer && (
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton
            aria-label="add to cart"
            onClick={() => addToCustomerCart(product.id)}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
}
