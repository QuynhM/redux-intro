import React, { useState } from "react";
import { Container, Button, Typography, Box, Grid } from "@mui/material";
import productOne from "../images/product1.gif";
import productTwo from "../images/product2.gif";
import ReactJson from "react-json-view";
import WrapperBox from "../components/WrapperBox";

const RootComponent = (props) => {
  const [products, setProducts] = useState([
    { id: "p1", title: "Product 1", price: 1999 },
    { id: "p2", title: "Product 2", price: 999 },
  ]);

  const [cart, setCart] = useState({
    products: [
      { id: "p1", title: "Product 1", price: 0, qty: 0 },
      { id: "p2", title: "Product 2", price: 0, qty: 0 },
    ],
    totalPrice: 0,
  });

  // Step 1
  const addProductToCart = (newProduct) => {
    const updatedCart = { ...cart };

    const index = newProduct.id === "p1" ? 0 : 1;
    updatedCart.products[index].qty++;
    updatedCart.products[index].price += newProduct.price;

    updatedCart.totalPrice += newProduct.price;

    setCart(updatedCart);
  };

  // Step 2
  const removeProductFromCart = (removedProduct) => {
    const updatedCart = { ...cart };

    const index = removedProduct.id === "p1" ? 0 : 1;
    updatedCart.products[index].qty--;
    updatedCart.products[index].price -= removedProduct.price;

    updatedCart.totalPrice -= removedProduct.price;

    setCart(updatedCart);
  };

  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        RootComponent {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Box sx={{ textAlign: "start" }}>
        <ReactJson
          name="state"
          src={{ products, cart }}
          collapsed={true}
          theme="monokai"
          displayDataTypes={false}
          displayObjectSize={false}
        />
      </Box>
      <Grid container spacing={2} p="1rem">
        <Grid item md={6}>
          <ProductPage
            products={products}
            addProductToCart={addProductToCart}
            removeProductFromCart={removeProductFromCart}
          />
        </Grid>
        <Grid item md={6}>
          <CartPage cart={cart} />
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const ProductPage = (props) => {
  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        Product Page {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Grid container spacing={2} p="1rem">
        <Grid item sm={6}>
          <ProductOne
            product={props.products[0]}
            addProductToCart={props.addProductToCart}
            removeProductFromCart={props.removeProductFromCart}
          />
        </Grid>
        <Grid item sm={6}>
          <ProductTwo
            product={props.products[1]}
            addProductToCart={props.addProductToCart}
            removeProductFromCart={props.removeProductFromCart}
          />
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const CartPage = (props) => {
  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        Cart Page {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Grid container spacing={2} p="1rem">
        <Grid item md={6}>
          <CartProductOne product={props.cart.products[0]} />
        </Grid>
        <Grid item md={6}>
          <CartProductTwo product={props.cart.products[1]} />
        </Grid>
        <Grid item md={12}>
          <Typography p="0.5rem" variant="h5">
            Total Price: 💵 {props.cart.totalPrice}
          </Typography>
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const ProductOne = (props) => {
  const { product, addProductToCart, removeProductFromCart } = props;

  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        {props.product.title} {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <img src={productOne} alt="Product One" width="100%" />
          <Typography p="0.5rem" variant="h6" sx={{ color: "success.main" }}>
            💵 {props.product.price}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="success"
              sx={{ width: "5rem" }}
              onClick={() => addProductToCart(product)}
            >
              Add
            </Button>
            <Button
              variant="error"
              sx={{ width: "5rem" }}
              onClick={() => removeProductFromCart(product)}
            >
              Remove
            </Button>
          </div>
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const ProductTwo = (props) => {
  const { product, addProductToCart, removeProductFromCart } = props;

  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        {props.product.title} {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <img src={productTwo} alt="Product Two" width="100%" />
          <Typography p="0.5rem" variant="h5" sx={{ color: "success.main" }}>
            💵 {props.product.price}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="success"
              size="sm"
              style={{ width: "5rem" }}
              onClick={() => addProductToCart(product)}
            >
              Add
            </Button>
            <Button
              variant="error"
              size="sm"
              style={{ width: "5rem" }}
              onClick={() => removeProductFromCart(product)}
            >
              Remove
            </Button>
          </div>
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const CartProductOne = (props) => {
  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        CartProduct 1 {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Box>
        <Typography p="0.5rem" variant="h6">
          Quantity: {props.product.qty}
        </Typography>
        <Typography p="0.5rem" variant="h6">
          Price: 💵 {props.product.price}
        </Typography>
      </Box>
    </WrapperBox>
  );
};

const CartProductTwo = (props) => {
  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        CartProduct 2 {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Box>
        <Typography p="0.5rem" variant="h6">
          Quantity: {props.product.qty}
        </Typography>
        <Typography p="0.5rem" variant="h6">
          Price: 💵 {props.product.price}
        </Typography>
      </Box>
    </WrapperBox>
  );
};

const PropDrillingExercise = () => {
  return (
    <Container>
      <br />
      <Typography p="0.5rem" variant="h6">
        How to add products to the cart?
      </Typography>
      <br />
      <RootComponent />
    </Container>
  );
};

export default PropDrillingExercise;
