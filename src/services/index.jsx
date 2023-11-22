import axios from "axios";

export const fetchAllProducts = async () => {
  try {
    const response = await axios.get("");
    return response.data;
  } catch (e) {
    console.error("Error", e);
  }
};
