import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../api/products";
import { Product } from "../../api/products";
import { SelectChangeEvent } from "@mui/material/Select";

const Details = () => {
  const [product, setProduct] = useState<Product>();
  let { id } = useParams();
  const [age, setAge] = useState("");

  const handleChange = (e: SelectChangeEvent) => {
    setAge(e.target.value);
  };

  useEffect(() => {
    id && getSingleProduct(id).then((res) => setProduct(res));
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <img
        src={`${product?.image}?w=248&fit=crop&auto=format`}
        srcSet={`${product?.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={product?.title}
        loading="lazy"
        height={350}
      />
      <Container
        sx={{
          display: "flex",
          height: "350px",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          gap: "30px",
          width: "450px",
          margin: "50px",
        }}
      >
        <Typography variant="h6">{product?.title}</Typography>
        <Button variant="contained">$ {product?.price}</Button>
        <Typography variant="body2">{product?.description}</Typography>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            padding: "0px",
          }}
        >
          <FormControl
            fullWidth
            variant="filled"
            size="small"
            sx={{ ml: 1, minWidth: 120, maxWidth: 300, height: "40px" }}
          >
            <InputLabel id="demo-simple-select-filled-label">
              Select size
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={age}
              onChange={handleChange}
              sx={{ height: "40px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="success"
            sx={{
              background:
                "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
            }}
            fullWidth
          >
            ADD TO BAG
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default Details;
