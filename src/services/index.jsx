import axios from "axios";

export const fetchAllProducts = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data;
  } catch (e) {
    console.error("Error", e);
  }
};
