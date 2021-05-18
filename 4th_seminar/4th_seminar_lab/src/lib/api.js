import axios from "axios";

export const getCardData = async () => {
  try {
    const data = await axios.get("http://localhost:3001/posts");
    console.log("[SUCCESS] GET card data");
    console.log(data.data.data);
    return data.data.data; 
  } catch (e) {
    console.log("[FAIL] GET card data");
    return null;
  }
};

export const createCardData = async (userData) => {
  try {
    const data = await axios.post("http://localhost:3001/posts", {
      data: userData,
    });
    console.log("[SUCCESS] POST card data");
    console.log(data.data.data);
    return data.data.data;
  } catch (e) {
    console.log("[FAIL] POST card data");
    return null;
  }
};