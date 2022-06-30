import * as React from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ProductCard = ({ product }) => (
  <Card
    sx={{
      width: { xs: "100%", sm: "50%", lg: "192px" },
      height: "206px",
      backgroundColor: "#E6E6E6",
    }}
  >
    <CardContent>
      <Stack direction="column" alignItems="center" marginTop={2}>
        <div>
          {product.svg}
        </div>
        <Typography
          sx={{ fontSize: 14 }}
          gutterBottom
          variant="h3"
          component="div"
          align="center"
          marginTop={3}
        >
          {product.display}
        </Typography>
      </Stack>
    </CardContent>
  </Card>
);

export default ProductCard;
