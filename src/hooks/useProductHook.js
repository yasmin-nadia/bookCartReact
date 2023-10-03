import { useState, useEffect, useContext } from "react";
import axiosInstance from "../utils/axiosInstance";

const useProduct = (productId) => {
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`http://127.0.0.1:8001/mybooks/getbook?_id=${productId}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data[0]);
        setProductData(json.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("Inside hook");
    // setLoading(true);
    // axiosInstance
    //   .get(`/getbook?_id=${productId}`)
    //   .then((res) => res.data)
    //   .then((data) => {
    //     console.log("Fetched Nadia Data ", data);
    //     setProductData(data);
    //     setLoading(false);
    //     console.log("Successfully recieved book:", data);
    //     // return productData;
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     console.error("Error recieving the book:", error);
    //     // throw error;
    //   });
  }, [productId]);

  useEffect(() => {
    console.log("Product data ", productData);
  }, [productData]);

  //   const getProduct = (productId) => {
  //     setLoading(true);
  //     axiosInstance
  //       .get(`/getbook?_id=${productId}`)
  //       //   .then((response) => response.data)
  //       .then((data) => {
  //         console.log("Fetched Nadia Data ", data);
  //         setProductData(data.data);
  //         setLoading(false);
  //         console.log("Successfully recieved book:", data);
  //         return productData;
  //       })
  //       .catch((error) => {
  //         setLoading(false);
  //         console.error("Error recieving the book:", error);
  //         throw error;
  //       });
  //   };
  console.log("productData", productData);
  return { productData, loading };
};

export default useProduct;
