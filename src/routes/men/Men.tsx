import { useEffect, useState } from "react";
import { getMenProducts, Products } from "../../api/products";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";  
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "../../components/Link/Link";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Men = () => {
  const [products, setProducts] = useState<Products>();
  const [favorite, setFavorite] = useState<boolean>(false);

  useEffect(() => {
    getMenProducts().then((res) => setProducts(res));
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    favorite ? setFavorite(false) : setFavorite(true)
  }

  return (
    <Container sx={{width: "100%", display: "flex", justifyContent: "center"}}>
    <ImageList sx={{ width: "70vw", height: "75vh", gap: "15px !important"}} cols={4}>
    <ImageListItem key="Subheader" cols={4}>
        <Typography variant="h4">Mens Clothes</Typography>
      </ImageListItem>
      {products?.map((item) => (
        <Link to={`/product/${item.id}`}>
        <ImageListItem key={item.image} sx={{height: "100% !important", boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"}} >
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
                onClick={handleClick}
              >
              {favorite ? <FavoriteBorderIcon /> :
                <FavoriteIcon />}
              </IconButton>
            }
          />
        </ImageListItem>
        </Link>
      ))}
    </ImageList>
    </Container>
  );
};

export default Men;
