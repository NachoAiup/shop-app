import { useEffect, useState } from "react";
import { Product, Products } from "../../api/products";
import Link from "../../components/Link/Link";
import {
  StyledContainer,
  AppBarTypography,
  ItemBox,
  DeleteButton,
  TotalBox,
  StartLookingButton,
} from "./Style";
import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Bag = () => {
  const [products, setProducts] = useState<Products>([]);
  let storageBagList = localStorage.getItem("bagList");

  useEffect(() => {
    let newArr;
    if (storageBagList) {
      newArr = JSON.parse(storageBagList);
      setProducts(newArr);
    }
  }, [storageBagList]);

  const handleDelete = (item: Product) => {
    let filteredElements = products?.filter((x) => x !== item);
    setProducts(filteredElements);
    localStorage.setItem("bagList", JSON.stringify(filteredElements));
  };

  return (
    <StyledContainer>
      <AppBarTypography variant="h5" mb={4}>
        CHECKOUT
      </AppBarTypography>
      {products && products?.length ? (
        <Box sx={{ display: "flex" }}>
          <Box>
            {products?.map((item, index) => (
              <ItemBox key={index}>
                <Link to={`/product/${item.id}`}>
                  <img
                    src={`${item.image}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    style={{ maxHeight: "100px" }}
                  />
                </Link>
                <Box>
                  <Typography
                    variant="h6"
                    noWrap={true}
                    sx={{ overflow: "hidden", width: "400px" }}
                  >
                    {item.title}{" "}
                  </Typography>
                  <Button variant="contained" size="small">
                    $ {item?.price}
                  </Button>
                  <Typography variant="body2">Size: {item.size} </Typography>
                  <DeleteButton
                    variant="outlined"
                    size="small"
                    onClick={() => handleDelete(item)}
                  >
                    <DeleteIcon />
                  </DeleteButton>
                </Box>
              </ItemBox>
            ))}
          </Box>
          <TotalBox>
            <Typography variant="h5">TOTAL</Typography>
            <Box>
              <Typography variant="body1" sx={{ width: "100%" }}>
                Sub-total: $
                {products
                  ?.reduce((partialSum, a) => partialSum + a.price, 0)
                  .toFixed(2)}
              </Typography>
              <Typography
                variant="body1"
                sx={{ width: "100%", borderBottom: "1px solid gray" }}
              >
                Shipping: $5.00
              </Typography>
              <Typography
                variant="h6"
                sx={{ width: "100%", textAlign: "center" }}
              >
                $
                {(
                  products?.reduce((partialSum, a) => partialSum + a.price, 0) +
                  5
                ).toFixed(2)}
              </Typography>
            </Box>
            <Button variant="contained" color="success">
              CHECKOUT
            </Button>
          </TotalBox>
        </Box>
      ) : (
        products &&
        !products?.length && (
          <Box>
            <div>Your bag is empty!</div>
            <Link to="/home">
              <StartLookingButton variant="contained" color="success" fullWidth>
                START LOOKING
              </StartLookingButton>
            </Link>
          </Box>
        )
      )}
    </StyledContainer>
  );
};

export default Bag;
