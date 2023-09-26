import React from 'react';
import Header from "./header";
import Footer from "./footer";
import Addbookform from './addbook';

function AddBookPage({ onAddBook,newBook,setNewBook }) {
  return (
    <div>
      <Addbookform onAddBook={onAddBook} newBook={newBook} setNewBook={setNewBook} />

    </div>
  );
}

export default AddBookPage;
