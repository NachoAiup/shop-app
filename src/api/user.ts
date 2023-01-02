import axios from "axios";

export interface User {
  username: string;
  password: string;
}

export const login = async (data: User) => {
  try {
    const response = await axios.post<{ token: string }>(
      "https://fakestoreapi.com/auth/login",
      data
    );
    return response.data.token;
  } catch (error) {
    console.error(error);
  }
};
