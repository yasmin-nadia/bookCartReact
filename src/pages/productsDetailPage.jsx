import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useProduct from "../hooks/admin/useProductHook";
import useAddtocartHook from "../hooks/user/useAddtocartHook";
import useCheckoutHook from "../hooks/user/useCheckoutHook";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartslice";
const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId)
  const check = localStorage.getItem("token");
  const { createPost } = useAddtocartHook();
  const { createCheckout, loading_one, responseData } = useCheckoutHook();
  console.log("productId", productId);
  const [quantity, setQuantity] = useState(1);
  const { productData, loading } = useProduct(productId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowCart = () => {
    navigate("/cart");
  };

  useEffect(() => {
    console.log("useeffect working");
  }, [productId]);

  if (!productData) {
    return <div>Product not found</div>;
  }

  console.log("product data", productData);
  const handleAddToCart = () => {
    const payload = {
      BookId: {
        id: productData._id,
        quantity: quantity,
        token: check,
      },
    };
    createPost(payload);
    const payloadWithoutToken = {
      BookId: {
        id: productData._id,
        quantity: quantity,
      },
    };

    dispatch(addToCart(payloadWithoutToken));
  };
  const handleCheckout = () => {
    createCheckout();
    console.log("Details page responseData", responseData);
    navigate("/showcheckout", { state: { responseData } });
  };
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
            <div className="cart-button-element">
              <button className="add-to-cart-button" onClick={handleShowCart}>
                Show Cart
              </button>
              <button className="add-to-cart-button" onClick={handleAddToCart}>
                Add to cart
              </button>
              <button className="add-to-cart-button" onClick={handleAddToCart}>
                +
              </button>
              <button className="add-to-cart-button" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
