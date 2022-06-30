import React from "react";
import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";

const Products = ({ products }) => (
  <Grid
    container
    justifyContent="left"
    marginTop={2}
    rowSpacing={2}
    columnSpacing={{ xs: 0, sm: 2 }}
    marginBottom={3}
  >
    {products.map((product) => {
      return (
        <Grid item xs={12} sm={6} lg={3} key={product.key} marginBottom={2}>
          <ProductCard product={product} />
        </Grid>
      );
    })}
  </Grid>
);

export default Products;
