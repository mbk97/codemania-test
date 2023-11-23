import axios from "axios";
import { toast } from "react-toastify";

export const fetchAllProducts = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data;
  } catch (e) {
    toast.error(e.message, {
      theme: "colored",
    });
  }
};
