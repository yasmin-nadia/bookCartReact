import React, { useEffect } from "react";
import useShowtranHook from "../hooks/user/useShowtranHook"; 

import "../App.css";

const ShowTranList = () => {
  const { responseData } = useShowtranHook();
 
  useEffect(() => {
    console.log("responseData", responseData, "from jsx");
  }, [responseData]);

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Transaction Status</h1>
      {responseData && (
        <div className="transaction-card">
          <p className="transaction-data">Cart ID: {responseData.cartId}</p>
          <p className="transaction-data">User ID: {responseData.userId}</p>
          <p className="transaction-data">Created: {responseData.created}</p>
          <p className="transaction-total">Total: {responseData.total}</p>
        </div>
      )}
    </div>
  );
};

export default ShowTranList;
