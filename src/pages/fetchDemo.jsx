import React, { useEffect } from "react";
import useProductHook from "../hooks/common/userProductHook";
import { useNavigate } from "react-router-dom";
import "../App.css";

const FetchDemo = () => {
  const { productData, loading } = useProductHook();

  useEffect(() => {
    console.log("From FetchDemo", productData);
  }, [productData]);
  console.log(" coproductData", productData);
  const navigate = useNavigate();

  return (
    <div className="fetch-demo-container">
      <h1>All Books</h1>
      <div className="product-grid">
        {productData.map((product) => (
          <div className="product-item" key={product._id}>
            <h5>{product.title}</h5>
            <p>Author: {product.author}</p>
            <img
              src={product.image[0]}
              style={{ width: "200px", height: "200px" }}
            />
            {/* <p>Price: ${product.price}</p>
            <p>Stock: {product.stock} in stock</p>
            <p>Genres: {product.genre.join(", ")}</p> */}
            <button
              className="add-to-cart-button"
              onClick={() => navigate(`/products/${product._id}`)}
            >
              Show Details
            </button>
            {/* <button className="add-to-cart-button">Add to Cart</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchDemo;
