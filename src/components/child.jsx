import React, { useContext } from 'react';
import { MyContext } from './showcart';

const Child = () => {
    const { cart } = useContext(MyContext);

    return (
        <ul>
        {cart.map((cartItem, index) => (
          <li key={index}>
            <p>Title: {cartItem.item.title}</p>
            <p>Quantity: {cartItem.quantity}</p>
            <p>Price: ${cartItem.item.price}</p>
          </li>
        ))}
      </ul>


    );
};

export default Child;
