import React, { useEffect } from "react";
import useProductHook from "../hooks/userProductHook";
import "../App.css";

const FetchDemo = () => {
  const { productData, loading } = useProductHook();

  useEffect(() => {
    console.log("From FetchDemo", productData);
  }, [productData]);

  return (
    <div className="fetch-demo-container">
      <h1>E-commerce Products</h1>
      <div className="product-grid">
        {productData.map((product) => (
          <div className="product-item" key={product._id}>
            <h5>{product.title}</h5>
            <p>Author: {product.author}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock} in stock</p>
            <p>Genres: {product.genre.join(", ")}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchDemo;
