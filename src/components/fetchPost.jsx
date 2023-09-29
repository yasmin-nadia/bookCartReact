import react, { useEffect, useState } from "react";
import useProductHook from "../hooks/userProductHook";
import useProductPostHook from "../hooks/userProductAdd";
const FetchPost = () => {
  const { createPost, loading } = useProductPostHook();
  const [productTitle, setProductTitle] = useState("");
  const [productDes, setProductDes] = useState("");
  const [productAuth, setProductAuth] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productStock, setProductStock] = useState(0);
  const [productPages, setProductPages] = useState(0);
  const [productCat, setProductCat] = useState("");
  const [productGenre, setProductGen] = useState([]);
  const [productPub, setProductPub] = useState("");

  const formStyles = {
    maxWidth: "400px",
    margin: "0 auto",
  };

  const inputContainerStyles = {
    marginBottom: "15px",
  };

  const labelStyles = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  };
  const inputStyles = {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    marginBottom: "5px",
  };
  const submitButtonStyles = {
    backgroundColor: "#734d26",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitting");
    const data = {
      title: productTitle,
      author: productAuth,
      price: productPrice,
      stock: productStock,
      category: productCat,
      genre: productGenre,
      pages: productPages,
      publisher: productPub,
      description: productDes,
    };
    createPost(data);
  };

  const { productData } = useProductHook();
  useEffect(() => {
    console.log("From fetchDemmo ", productData);
  }, [productData]);
  return (
    <div>
      <h1>Add product</h1>
      {loading === true && <h4>Loading...</h4>}
      <form style={formStyles} onSubmit={handleSubmit}>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Title:</label>
          <input
            type="text"
            label="title"
            placeholder="input title"
            onChange={(e) => setProductTitle(e.target.value)}
            style={inputStyles}
          />
        </div>

        <div style={inputContainerStyles}>
          <label style={labelStyles}>Author:</label>
          <input
            type="text"
            label="author"
            placeholder="input author"
            onChange={(e) => setProductAuth(e.target.value)}
            style={inputStyles}
          />
        </div>

        <div style={inputContainerStyles}>
          <label style={labelStyles}>Price:</label>
          <input
            type="number"
            label="price"
            placeholder="input price"
            onChange={(e) => setProductPrice(e.target.value)}
            style={inputStyles}
          />
        </div>

        <div style={inputContainerStyles}>
          <label style={labelStyles}>Stock:</label>
          <input
            type="number"
            label="stock"
            placeholder="input stock"
            onChange={(e) => setProductStock(e.target.value)}
            style={inputStyles}
          />
        </div>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Genre:</label>
          <input
            type="text"
            label="Genre"
            placeholder="input Genre"
            onChange={(e) => setProductGen(e.target.value)}
            style={inputStyles}
          />
        </div>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Category:</label>
          <input
            type="text"
            label="Category"
            placeholder="input Category"
            onChange={(e) => setProductCat(e.target.value)}
            style={inputStyles}
          />
        </div>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Description:</label>
          <input
            type="text"
            label="description"
            placeholder="input description"
            onChange={(e) => setProductDes(e.target.value)}
            style={inputStyles}
          />
        </div>

        <div style={inputContainerStyles}>
          <label style={labelStyles}>Publisher:</label>
          <input
            type="text"
            label="publisher"
            placeholder="input publisher"
            onChange={(e) => setProductPub(e.target.value)}
            style={inputStyles}
          />
        </div>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Pages:</label>
          <input
            type="number"
            label="pages"
            placeholder="input pages"
            onChange={(e) => setProductPages(e.target.value)}
            style={inputStyles}
          />
        </div>

        <button type="button" onClick={handleSubmit} style={submitButtonStyles}>
          Add Book
        </button>
      </form>
    </div>
  );
};
export default FetchPost;
