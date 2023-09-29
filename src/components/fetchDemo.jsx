import react, { useEffect } from "react";
import useProductHook from "../hooks/userProductHook";
import "../App.css";

const FetchDemo = () => {
  const { productData, loading } = useProductHook();
  useEffect(() => {
    console.log("From fetchDemmo ", productData);
  }, [productData]);
  return (
    <div className="fetch-demo-container">
      <h1>Fetch demo</h1>
      <h3>Product data lists</h3>
      {loading === true && <h4>Loading...</h4>}
      <ul>
        {productData.map((product) => (
          <li key={product._id}>
            <h5>Title: {product.title}</h5>
            <p>Author: {product.author}</p>
            <p>Price: {product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>Genre: {product.genre.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FetchDemo;
