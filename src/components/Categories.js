import React, { useEffect, useState } from "react";
import { Button, Grid, Container } from "@mui/material";
import { getCategories, getProducts } from "../Data/Api";
import Products from "./Products";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");
  const handleClick = (categoryKey) => {
    if (currentCategory !== categoryKey) {
      setCurrentCategory(categoryKey);
    }
  };

  useEffect(() => {
    setCategories(getCategories());
  }, []);

  useEffect(() => {
    setCurrentProducts(getProducts(currentCategory));
  }, [currentCategory]);

  return (
    <Container>
      <Grid
        container
        marginTop={2}
        rowSpacing={2}
        columnSpacing={{ xs: 0, sm: 2 }}
        marginBottom={3}
      >
        {categories.map((category) => {
          const color = category.color;
          return (
            <Grid item xs={12} sm={6} lg={3} key={category.key}>
              <Button
                variant="contained"
                sx={{
                  width: { xs: "100%", sm: "50%,", lg: "192px" },
                  borderRadius: "3px",
                  height: "48px",
                  backgroundColor: color,
                }}
                onClick={() => handleClick(category.key)}
              >
                {category.display}
              </Button>
            </Grid>
          );
        })}
      </Grid>
      <Products products={currentProducts} />
    </Container>
  );
};

export default Categories;
