import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const DebounceDemo = () => {
  const [searchParam, setProductSearchParam] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const callProductApi = () => {
      if (searchParam.trim() === "") {
        setProductData([]);
        setErrorMsg("");
        return;
      }

      axiosInstance
        .get(`/getbook?searchParam=${searchParam}`)
        .then((resp) => resp.data)
        .then((data) => {
          console.log("Data: ", data);
          setProductData(data.data);
          setErrorMsg("");
        })
        .catch((err) => {
          setErrorMsg("Some error occurred");
          setProductData([]);
        });
    };

    console.log("Search Param: ", searchParam);

    const timeOutFunc = setTimeout(() => {
      callProductApi();
    }, 3000);

    return () => clearTimeout(timeOutFunc);
  }, [searchParam]);

  console.log("productData", productData);

  return (
    <div>
      <h1>MODULE: Debounce demo</h1>
      <input
        placeholder="Enter Search text"
        onChange={(e) => setProductSearchParam(e.target.value)}
      />

      <h4>Fetched data by search parameter: </h4>
      <div>
        {productData.length > 0
          ? productData.map((book, index) => (
              <div key={index}>
                <h5>Title: {book.title}</h5>
                <p>Description: {book.description}</p>
              </div>
            ))
          : errorMsg && <h4>Error: {errorMsg}</h4>}
      </div>
    </div>
  );
};

export default DebounceDemo;
