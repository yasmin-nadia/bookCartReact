import { useState, useEffect, useContext } from "react";
import axiosInstance from "../../utils/axiosInstance";
const useAddReviewHook = (bookId) => {
  const [loading, setLoading] = useState(false);

  const createPost = (formData) => {
    setLoading(true);
    axiosInstance
    // .get(`/getbook?bookId=${productId}`)
      .post(`/addreview?bookId=${bookId}`, formData)
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log("Successfully added to cart:", data);
        return data;
      })
      .catch((error) => {
        setLoading(false);
        // console.error("Error adding to cart:", error);
        throw error;
      });
  };
  
  const updatePost = (formData) => {
    setLoading(true);
    axiosInstance
    // .get(`/getbook?bookId=${productId}`)
      .put(`/updatereview?bookId=${bookId}`, formData)
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log("Successfully added to cart:", data);
        return data;
      })
      .catch((error) => {
        setLoading(false);
        // console.error("Error adding to cart:", error);
        throw error;
      });
  };
  const deletePost = (formData) => {
    setLoading(true);
    axiosInstance
    // .get(`/getbook?bookId=${productId}`)
      .delete(`/deletereview?bookId=${bookId}`,{data:formData})
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log("Successfully added to cart:", data);
        return data;
      })
      .catch((error) => {
        setLoading(false);
        // console.error("Error adding to cart:", error);
        throw error;
      });
  };
  
  return { createPost,updatePost,deletePost,loading };
};

export default useAddReviewHook;
