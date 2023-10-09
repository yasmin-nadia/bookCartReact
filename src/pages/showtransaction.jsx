// ShowTranList.js
import React, { useEffect } from "react";
import useShowtranHook from "../hooks/user/useShowtranHook"; // Import the default export

import "../App.css";

const ShowTranList = () => {
  const { createTransaction } = useShowtranHook(); // Use the exported function and variables

  useEffect(() => {
    createTransaction();
  }, []);

  return <div className="fetch-demo-container">something</div>;
};

export default ShowTranList;
