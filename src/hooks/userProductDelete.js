import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
const useProductDeleteHook = () => {
  const [loading, setLoading] = useState(false);

  const createDelete = (formData) => {
    setLoading(true);
    axiosInstance
      .delete("/deletebook", { data: formData })
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log("Successfully deleted book:", data);
        return data;
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error deleted book:", error);
        throw error;
      });
  };
  return { createDelete, loading };
};

export default useProductDeleteHook;
