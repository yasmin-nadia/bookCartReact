import { useState, useEffect, useContext } from "react";
import axiosInstance from "../../utils/axiosInstance";
const useProductUpdateHook = (title) => {
  const [loading, setLoading] = useState(false);
// .post(`/addrate?bookId=${bookId}`, formData)
  const createUpdate = (formData) => {
    setLoading(true);
    axiosInstance
      .put(`/updatebook?title=${title}`, formData)
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log("Successfully Updated book:", data);
        return data;
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error updating book:", error);
        throw error;
      });
  };
  return { createUpdate, loading };
};

export default useProductUpdateHook;
