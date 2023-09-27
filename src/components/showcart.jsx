import React, { useEffect, useState, createContext } from 'react';
import Child from "./child"
export const MyContext = createContext();
const cartStyles = {
  position: "fixed",
  top: "0",
  right: "0",
  padding: "10px",
  backgroundColor: "#dfbf9f",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  zIndex: "999",
};

const Showcart = ({ cart, calculateTotalPrice }) => {
  const [title, setTitle] = useState("");
  const totalPrice = calculateTotalPrice();

  useEffect(() => {
    if (totalPrice > 100) {
      setTitle("Congratulations! You've won the VIP card");
    } else {
      setTitle("");
    }
  }, [totalPrice]);

  return (
    <div style={cartStyles}>
      <h2>Cart</h2>
      <h3>{title}</h3>
      <div>
        <MyContext.Provider value={{ cart }}>
          <Child />
        </MyContext.Provider>
      </div>
      <p>Total Price: ${calculateTotalPrice().toFixed(2)}</p>
    </div>
  );
};

export default Showcart;
