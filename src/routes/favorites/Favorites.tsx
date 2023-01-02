import { useEffect, useState } from "react";
import { getMenProducts, Products } from "../../api/products";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "../../components/Link/Link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { StyledContainer, StyledImageListItem } from "./Style";

const Favorites = () => {
  const [products, setProducts] = useState<Products>();
  const [favoriteList, setFavoriteList] = useState<Number[]>([]);
  let storageFavList = localStorage.getItem("favoritesList");

  useEffect(() => {
    getMenProducts().then((res) => {
      let a = res?.filter((x) => favoriteList.includes(x.id));
      setProducts(a);
    });
  }, [products]);

  useEffect(() => {
    let newArr;
    if (storageFavList) {
      newArr = Array.from(storageFavList.replaceAll(",", ""));
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
      <ImageList
        sx={{ width: "70vw", height: "75vh", gap: "15px !important" }}
        cols={4}
      >
        <ImageListItem key="Subheader" cols={4}>
          <Typography variant="h4">Favorites </Typography>
        </ImageListItem>
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
    </StyledContainer>
  );
};

export default Favorites;
