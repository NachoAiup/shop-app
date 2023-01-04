import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../api/products";
import { Product } from "../../api/products";
import { SelectChangeEvent } from "@mui/material/Select";
import {
  StyledContainer,
  AppBarTypography,
  StyledProductInfoContainer,
  StyledButtonsContainer,
  StyledBodyContainer,
} from "./Styles";

type BagList = {
  id: number;
  size: string;
}[];

const Details = () => {
  const [product, setProduct] = useState<Product>();
  let { id } = useParams();
  const [size, setSize] = useState("");
  const [bagList, setBagList] = useState<BagList>([]);

  const handleChange = (e: SelectChangeEvent) => {
    setSize(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>, id: number) => {
    e.preventDefault();
    let oldElements = localStorage.getItem("bagList");
    let bagElement = {
      id,
      size,
    };
    let bagElements = oldElements?.push(bagElement);
    setBagList(bagElements);
    localStorage.setItem("bagList", bagElements.toString());
  };

  useEffect(() => {
    id && getSingleProduct(id).then((res) => setProduct(res));
  }, []);

  return (
    <StyledBodyContainer>
      <AppBarTypography>PRODUCT DETAILS</AppBarTypography>
      <StyledContainer>
        <img
          src={`${product?.image}?w=248&fit=crop&auto=format`}
          srcSet={`${product?.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={product?.title}
          loading="lazy"
          height={350}
        />
        <StyledProductInfoContainer>
          <Typography variant="h6">{product?.title}</Typography>
          <Button variant="contained">$ {product?.price}</Button>
          <Typography variant="body2">{product?.description}</Typography>
          <StyledButtonsContainer>
            <FormControl
              variant="filled"
              size="small"
              sx={{ minWidth: 120, width: 200 }}
            >
              <InputLabel id="demo-simple-select-filled-label">
                Select size
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={size}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                <MenuItem value={"S"}>S</MenuItem>
                <MenuItem value={"M"}>M</MenuItem>
                <MenuItem value={"L"}>L</MenuItem>
              </Select>
            </FormControl>
            <Button
              onClick={(e) => handleClick(e, Number(id))}
              variant="contained"
              color="success"
              sx={{
                background:
                  "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
              }}
            >
              ADD TO BAG
            </Button>
          </StyledButtonsContainer>
        </StyledProductInfoContainer>
      </StyledContainer>
    </StyledBodyContainer>
  );
};

export default Details;
