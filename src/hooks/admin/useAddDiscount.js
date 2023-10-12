import { useState, useEffect, useContext } from "react";
import axiosInstance from "../../utils/axiosInstance";
const useAddDiscountHook = (bookId) => {
  const [loading, setLoading] = useState(false);

  const createPost = (formData) => {
    setLoading(true);
    axiosInstance
    // .get(`/getbook?bookId=${productId}`)
      .post(`/adddiscount?bookId=${bookId}`, formData)
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log("Successfully added to discpunt to book:", data);
        return data;
      })
      .catch((error) => {
        setLoading(false);
        
        throw error;
      });
  };
  
 
  
  return { createPost,loading };
};

export default useAddDiscountHook;