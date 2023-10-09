import { useState, useEffect, useContext } from "react";
import axiosInstance from "../../utils/axiosInstance";
const useAddtocartHook = () => {
  const [loading, setLoading] = useState(false);

  const createPost = (formData) => {
    setLoading(true);
    axiosInstance
      .post("/addtocart", formData)
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log("Successfully added to cart:", data);
        return data;
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error adding to cart:", error);
        throw error;
      });
  };
  return { createPost, loading };
};

export default useAddtocartHook;
