import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";

const useProductGetHook = () => {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async (productId) => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(`/getproduct/${productId}`);
        const data = response.data;
        setProductData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching product:", error);
      }
    };

    // Fetch product data when the component mounts
    fetchProduct(productId);
  }, [productId]);

  return { productData, loading };
};

export default useProductGetHook;
