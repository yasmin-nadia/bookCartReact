import React from 'react';
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
  return (
    <div style={cartStyles}>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      <p>Total Price: ${calculateTotalPrice().toFixed(2)}</p>
    </div>
  );
};

export default Showcart;
