import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import useShowCartHook from "../hooks/user/useShowCartHook"
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../App.css";

const ShowCartList = () => {
  const {showCart,
loading_one}=useShowCartHook()
const showcart = JSON.parse(localStorage.getItem("showcart"));
console.log("showcart",showcart)
console.log("showcart.message",showcart.message)

useEffect(() => {
    console.log("useeffect duibar kaj korlo")
    showCart();
  }, []);

  return (
    <div className="fetch-demo-container">
      
      <p className="checkout-title">{showcart.message}</p>
      {showcart.data && (
         <div className="transaction-card">
          {showcart.data.Cart.bookId.map((item, index) => (
            <div key={index}>
              <p>Title: {item.id.title}</p>
              <p>Price: {item.id.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
          <p>Total: {showcart.data.Cart.total}</p>
        </div>
      )}
    </div>
  );
};

export default ShowCartList;
