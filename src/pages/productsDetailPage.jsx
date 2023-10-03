import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProductHook";

const ProductDetails = () => {
  const { productId } = useParams();

  console.log("productId", productId);
  const { productData, loading } = useProduct(productId);
  //   const productData = {};

  if (loading) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    console.log("useeffect working");
    // getProduct(productId);
  }, [productId]);

  if (!productData) {
    return <div>Product not found</div>;
  }

  console.log("product data", productData);

  return (
    <div>
      ProductDetails
      {productData && (
        <div>
          <h4>Product Title: {productData.title}</h4>
          <p>Author: {productData.author}</p>
          <p>Price: ${productData.price}</p>
          <p>Stock: {productData.stock} in stock</p>
          {/* <p>Genres: {productData.genre.join(", ")}</p> */}
          <button className="add-to-cart-button">Add to cart</button>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
