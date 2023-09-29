import { useState, useEffect } from "react";
const useProductHook = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("userproducthook is working");

  useEffect(() => {
    setLoading(true);
    fetch("http://127.0.0.1:8001/mybooks/getbook")
      .then((resp) => resp.json())
      .then((data) => {
        console.log("fetched ", data);
        setProductData(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.error("Error fetching data:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("From product hook ", productData);
  }, [productData]);

  return { productData, loading };
};

export default useProductHook;
