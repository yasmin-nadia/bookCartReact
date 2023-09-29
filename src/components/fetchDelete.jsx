import react, { useEffect, useState } from "react";
import useProductHook from "../hooks/userProductHook";
import useProductPostHook from "../hooks/userProductAdd";
import useProductUpdateHook from "../hooks/userProductUpdate";
import useProductDeleteHook from "../hooks/userProductDelete";
const FetchDelete = () => {
  const { createDelete, loading } = useProductDeleteHook();
  const [productTitle, setProductTitle] = useState("");

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

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    alert("Updating");
    const data = {
      title: productTitle,
    };
    createDelete(data);
  };

  return (
    <div>
      <h1>Delete product</h1>
      {loading === true && <h4>Loading...</h4>}

      <form style={formStyles} onSubmit={handleDeleteSubmit}>
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

        <button
          type="button"
          onClick={handleDeleteSubmit}
          style={submitButtonStyles}
        >
          Delete Book
        </button>
      </form>
    </div>
  );
};
export default FetchDelete;
