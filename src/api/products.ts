import axios from "axios";

export interface Product {
  image: string;
  title: string;
  price: number;
  id: number;
  description: string;
  size: string | undefined;
}

export type Products = Product[];

export const getAllProducts = async () => {
  try {
    const response = await axios.get<Products>(
      "https://fakestoreapi.com/products"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSingleProduct = async (id: string) => {
  try {
    const response = await axios.get<Product>(
      `https://fakestoreapi.com/products/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

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

export const getWomenProducts = async () => {
  try {
    const response = await axios.get<Products>(
      "https://fakestoreapi.com/products/category/women's%20clothing"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getFilteredProduct = async (keyword: string[]) => {
  try {
    const response = await axios.get<Products>(
      `https://fakestoreapi.com/products`
    );
    const filteredResults = response.data.filter(
      (x) =>
        keyword.every((word) =>
          x.description.toLowerCase().includes(word.toLowerCase())
        ) ||
        keyword.every((word) =>
          x.title.toLowerCase().includes(word.toLowerCase())
        )
    );
    return filteredResults;
  } catch (error) {
    console.error(error);
  }
};
