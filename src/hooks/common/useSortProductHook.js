import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

const useSortProductHook = (order, sortField) => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/getbook?order=${order}&sortField=${sortField}`)
      .then((resp) => resp.data)
      .then((data) => {
        setProductData(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, [order, sortField]);

  return { productData, loading };
};

export default useSortProductHook;
