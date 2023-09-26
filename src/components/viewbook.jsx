import React from 'react';

const Bookinfo = ({ book, currentImage, onShowAlsoClick }) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <img src={currentImage} alt={book.title} />
      <p>Author: {book.author}</p>
      <p>Price: ${book.price}</p>
      <p>Stock: {book.stock}</p>
      <p>Genre: {book.genre}</p>
      <p>Description: {book.description}</p>
      <button onClick={onShowAlsoClick}>Show Also</button>
    </div>
  );
};

export default Bookinfo;
