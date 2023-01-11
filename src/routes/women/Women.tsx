import { useEffect, useState } from "react";
import { getWomenProducts, Products } from "../../api/products";
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

const Women = () => {
  const [products, setProducts] = useState<Products>();
  const [favoriteIdProductsList, setFavoriteIdProductsList] = useState<
    Number[]
  >(() => {
    const storageFavList = localStorage.getItem("favoritesList");
    if (storageFavList) {
      return storageFavList.split(",").map((x) => parseInt(x));
    }
    return [];
  });

  useEffect(() => {
    getWomenProducts().then((res) => setProducts(res));
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLElement>, id: number) => {
    e.preventDefault();
    let favoriteElements: Number[] = !favoriteIdProductsList.includes(id)
      ? favoriteIdProductsList.concat(id)
      : favoriteIdProductsList.filter((a) => a !== id);
    setFavoriteIdProductsList(favoriteElements);
    localStorage.setItem("favoritesList", favoriteElements.toString());
  };

  return (
    <StyledContainer>
      <AppBarTypography variant="h5">WOMEN CLOTHES</AppBarTypography>
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
                    {!favoriteIdProductsList.includes(item.id) ? (
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
    </StyledContainer>
  );
};

export default Women;
