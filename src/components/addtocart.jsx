import React from 'react';

const Addtocart = ({ buttonStyles,handleAddToCart }) => {
  return (
    <button style={buttonStyles} onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
};

export default Addtocart;
