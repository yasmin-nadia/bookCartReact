import { useState, useEffect, useContext } from "react";
import axiosInstance from "../../utils/axiosInstance";

const useProduct = (productId) => {
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Inside hook");
    setLoading(true);
    axiosInstance
      .get(`/getbook?_id=${productId}`)
      .then((res) => res.data)
      .then((data) => {
        console.log("Fetched Nadia Data ", data.data[0]);
        setProductData(data.data[0]);
        setLoading(false);
        console.log("Successfully recieved book:", data.data[0]);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error recieving the book:", error);
      });
  }, [productId]);

  useEffect(() => {
    console.log("Product data ", productData);
  }, [productData]);

  console.log("productData", productData);
  return { productData, loading };
};

export default useProduct;
