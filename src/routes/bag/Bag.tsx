import { useEffect, useState } from "react";
import { Product, Products } from "../../api/products";
import Link from "../../components/Link/Link";
import { StyledContainer, AppBarTypography } from "./Style";
import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Bag = () => {
  const [products, setProducts] = useState<Products>();
  let storageBagList = localStorage.getItem("bagList");

  useEffect(() => {
    let newArr;
    if (storageBagList) {
      newArr = JSON.parse(storageBagList);
      setProducts(newArr);
    }
  }, [storageBagList]);

  const handleDelete = (item: Product) => {
    let filteredElements = products?.filter(x => x !== item);
    setProducts(filteredElements)
    localStorage.setItem("bagList", JSON.stringify(filteredElements));
  }

  return (
    <StyledContainer>
      <AppBarTypography variant="h5" mb={4}>
        CHECKOUT
      </AppBarTypography>
      {products && products?.length && (
        <Box sx={{ display: "flex" }}>
          <Box>
            {products?.map((item, index) => (
              <Box
              key={index}
                sx={{
                  width: 500,
                  height: 100,
                  boxShadow:
                    "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
                  margin: 1,
                  display: "flex",
                  gap: "5px",
                  p: 1,
                  position: "relative"
                }}
              >
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
                  <Typography variant="h6" noWrap={true} sx={{overflow: "hidden", width: "400px"}}>{item.title} </Typography>
                  <Button variant="contained" size="small">
                    $ {item?.price}
                  </Button>
                  <Typography variant="body2">Size: {item.size} </Typography>
                  <Button variant="outlined" size="small" onClick={() => handleDelete(item)} sx={{position: "absolute", right: "10px", bottom: "10px"}}>
                  <DeleteIcon />
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              width: 200,
              height: 200,
              boxShadow:
                "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
              margin: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{ borderBottom: "1px solid gray", width: "100%" }}
            >
              TOTAL
            </Typography>
            <Box>
              <Typography variant="body1" sx={{ width: "100%" }}>
                Sub-total: $
                {products?.reduce((partialSum, a) => partialSum + a.price, 0).toFixed(2)}
              </Typography>
              <Typography variant="body1" sx={{ width: "100%", borderBottom: "1px solid gray" }}>
                Shipping: $5.00
              </Typography>
              <Typography variant="h6" sx={{ width: "100%", textAlign:"center" }}>
                $
                {((products?.reduce((partialSum, a) => partialSum + a.price, 0)) + 5).toFixed(2)}
              </Typography>
            </Box>
            <Button variant="contained" color="success">
              CHECKOUT
            </Button>
          </Box>
        </Box>
      )}
      {products && !products?.length && (
        <Box>
          <div>Your bag is empty!</div>
          <Link to="/home">
            <Button
              variant="contained"
              color="success"
              sx={{
                background:
                  "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
                marginTop: 2,
              }}
              fullWidth
            >
              START LOOKING
            </Button>
          </Link>
        </Box>
      )}
    </StyledContainer>
  );
};

export default Bag;
