import {
  AlertColor,
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
import CustomizedSnackbars from "./Snackbar";

const Details = () => {
  const [product, setProduct] = useState<Product>();
  let { id } = useParams();
  const [size, setSize] = useState("");
  const [message, setMessage] = useState<AlertColor>();
  const [open, setOpen] = useState(false);

  const handleChange = (e: SelectChangeEvent) => {
    setSize(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let oldElements = localStorage.getItem("bagList") || "[]";
      let bagElement = {
        id: product?.id,
        image: product?.image,
        title: product?.title,
        price: product?.price,
        size,
      };
      let bagElements = JSON.parse(oldElements).concat(bagElement);
      localStorage.setItem("bagList", JSON.stringify(bagElements));
      setMessage("success")
      setOpen(true)
    } catch(e){
      setMessage("error")
      setOpen(true)
    }
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
          <Typography variant="body2" sx={{maxHeight: "300px", overflowY: "scroll"}} >{product?.description}</Typography>
          <StyledButtonsContainer
              onSubmit={(e) => handleSubmit(e)}>
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
                required
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
              variant="contained"
              color="success"
              type="submit"
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
            <CustomizedSnackbars open={open} setOpen={setOpen} message={message} />
    </StyledBodyContainer>
  );
};

export default Details;
