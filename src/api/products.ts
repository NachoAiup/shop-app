import axios from "axios";

export interface Product {
  image: string;
  title: string;
  price: number;
  id: number;
}

export type Products = Product[];

export const getMenProducts = async () => {
  try {
    const response = await axios.get<Products>(
      "https://fakestoreapi.com/products/category/men's%20clothing"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
