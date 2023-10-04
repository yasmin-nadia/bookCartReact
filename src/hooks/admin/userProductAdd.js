import { useState, useEffect, useContext } from "react";
import axiosInstance from "../../utils/axiosInstance";
const useProductPostHook = () => {
  const [loading, setLoading] = useState(false);

  const createPost = (formData) => {
    setLoading(true);
    axiosInstance
      .post("/addbook", formData)
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log("Successfully added book:", data);
        return data;
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error added book:", error);
        throw error;
      });
  };
  return { createPost, loading };
};

export default useProductPostHook;
