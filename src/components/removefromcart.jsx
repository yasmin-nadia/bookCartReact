import React from 'react';

const Reovefromcart = ({ buttonStyles,handleRemoveFromCart }) => {
  return (
    <button style={buttonStyles} onClick={handleRemoveFromCart}>
      Remove From Cart
    </button>
  );
};

export default Reovefromcart;
