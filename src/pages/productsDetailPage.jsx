import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProduct from "../hooks/admin/useProductHook";

const ProductDetails = () => {
  const { productId } = useParams();

  console.log("productId", productId);
  const { productData, loading } = useProduct(productId);

  useEffect(() => {
    console.log("useeffect working");
  }, [productId]);

  if (!productData) {
    return <div>Product not found</div>;
  }

  console.log("product data", productData);

  return (
    <div className="show-product-detail">
      {loading === true && <h4>Loading...</h4>}
      <h1>ProductDetails</h1>
      {productData && (
        <div className="product-grid-two">
          <div className="product-item" key={productData._id}>
            <img
              src={productData.image[0]}
              style={{ width: "200px", height: "200px" }}
            />
            <h4>Product Title: {productData.title}</h4>
            <p>Author: {productData.author}</p>
            <p>Price: ${productData.price}</p>
            <p>Stock: {productData.stock} in stock</p>
            <p>Genres: {productData.genre.join(", ")}</p>
            <button className="add-to-cart-button">Add to cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
