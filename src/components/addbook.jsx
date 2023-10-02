import React, { useState } from "react";

function Addbookform({ onAddBook, newBook, setNewBook }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("name,value", name, value);
    setNewBook((prevNewBook) => ({
      ...prevNewBook,
      [name]: value,
    }));
  };
  const handleImageInputChange = (event) => {
    const { name, files } = event.target;

    const imageFiles = Array.from(files);
    const imageUrls = [];

    imageFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target.result;
        imageUrls.push(dataUrl);
        if (imageUrls.length === imageFiles.length) {
          setNewBook((prevNewBook) => ({
            ...prevNewBook,
            [name]: imageUrls,
          }));
        }
      };

      reader.readAsDataURL(file);
    });

    console.log("imageUrls", imageUrls);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitting");
    if (newBook.title && newBook.author) {
      onAddBook(newBook);
      console.log("New book", newBook);
    }
  };
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

  return (
    <div>
      <h2>Add a New Book</h2>
      <form style={formStyles} onSubmit={handleSubmit}>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Title:</label>
          <input
            type="text"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
            style={inputStyles}
          />
        </div>

        <div style={inputContainerStyles}>
          <label style={labelStyles}>Author:</label>
          <input
            type="text"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
            style={inputStyles}
          />
        </div>

        <div style={inputContainerStyles}>
          <label style={labelStyles}>Price:</label>
          <input
            type="number"
            name="price"
            value={newBook.price}
            onChange={handleInputChange}
            style={inputStyles}
          />
        </div>

        <div style={inputContainerStyles}>
          <label style={labelStyles}>Stock:</label>
          <input
            type="number"
            name="stock"
            value={newBook.stock}
            onChange={handleInputChange}
            style={inputStyles}
          />
        </div>

        <div style={inputContainerStyles}>
          <label style={labelStyles}>Genre:</label>
          <input
            type="text"
            name="genre"
            value={newBook.genre}
            onChange={handleInputChange}
            style={inputStyles}
          />
        </div>

        <div style={inputContainerStyles}>
          <label style={labelStyles}>Description:</label>
          <input
            type="text"
            name="description"
            value={newBook.description}
            onChange={handleInputChange}
            style={inputStyles}
          />
        </div>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Image:</label>
          <input
            type="file"
            name="image"
            multiple
            onChange={handleImageInputChange}
            style={inputStyles}
          />
        </div>

        <button type="button" onClick={handleSubmit} style={submitButtonStyles}>
          Add Book
        </button>
      </form>
    </div>
  );
}

export default Addbookform;
