import { useEffect, useState } from "react";
import { getAllProducts, Products } from "../../api/products";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "../../components/Link/Link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  StyledContainer,
  StyledImageListItem,
  AppBarTypography,
} from "./Style";
import { Box, Button } from "@mui/material";

const Bag = () => {
  const [products, setProducts] = useState<Products>();
  const [favoriteList, setFavoriteList] = useState<Number[]>([]);
  let storageFavList = localStorage.getItem("favoritesList");

  useEffect(() => {
    getAllProducts().then((res) => {
      let a = res?.filter((x) => favoriteList.includes(x.id));
      setProducts(a);
    });
  }, [products]);

  useEffect(() => {
    let newArr;
    if (storageFavList) {
      newArr = storageFavList.split(",");
      newArr = newArr.map((x) => parseInt(x));
      setFavoriteList(newArr);
    }
  }, [storageFavList]);

  const handleClick = (e: React.MouseEvent<HTMLElement>, id: number) => {
    e.preventDefault();
    let favoriteElements: Number[] = !favoriteList.includes(id)
      ? favoriteList.concat(id)
      : favoriteList.filter((a) => a !== id);
    setFavoriteList(favoriteElements);
    localStorage.setItem("favoritesList", favoriteElements.toString());
  };

  return (
    <StyledContainer>
      <AppBarTypography variant="h5">CHECKOUT </AppBarTypography>
      <ImageList gap={8} cols={4} sx={{ maxWidth: "1200px" }}>
        <ImageListItem key="Subheader" cols={4}></ImageListItem>
        {products?.map((item) => (
          <Link to={`/product/${item.id}`} key={item.image}>
            <StyledImageListItem>
              <img
                src={`${item.image}?w=248&fit=crop&auto=format`}
                srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={"$" + item.price}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                    onClick={(e) => handleClick(e, item.id)}
                  >
                    {!favoriteList.includes(item.id) ? (
                      <FavoriteBorderIcon />
                    ) : (
                      <FavoriteIcon />
                    )}
                  </IconButton>
                }
              />
            </StyledImageListItem>
          </Link>
        ))}
      </ImageList>
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
