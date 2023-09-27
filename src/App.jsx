import React, { useState } from 'react'; // Import React and useState
import Header from "./components/header";
import Footer from "./components/footer";
import Carddata from "./components/carddata";
import './App.css';
import Addtocart from './components/addtocart';
import Showcart from './components/showcart';
import Cardcomponent from './components/card';
import Addbookform from './components/addbook';
import AddBookPage from './components/addbookpage';
const buttonContainerStyles = {
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
  backgroundColor: "#996633"
};
console.log("carddata", Carddata)

const buttonStyles = {
  margin: "0 10px",
  padding: "10px 20px",
  backgroundColor: "#996633",

  color: "white",
  border: "2px solid #734d26",
  cursor: "pointer",
  borderRadius:"5px"
};




function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [books, setBooks] = useState(Carddata);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    price: 0,
    stock: 0,
    image: [],
    description: "",
    genre: "",
  });

  
  const addBook = () => {
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    console.log(updatedBooks)
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
  };
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? books.length - 1 : prevIndex - 1
    );
  };
  const handleNextImageClick = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % books[currentIndex].image.length
    );
  };
  const handleAddToCart = () => {
    const selectedBook = books[currentIndex];
    const existingCartItem = cart.find((cartItem) => cartItem.item.title === selectedBook.title);

    if (existingCartItem) {
      existingCartItem.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { item: selectedBook, quantity: 1 }]);
    }
  };


  const handleRemoveFromCart = () => {
    const selectedBook = books[currentIndex];
    const existingCartItem = cart.find((cartItem) => cartItem.item.title === selectedBook.title);
  
    if (existingCartItem) {
      if (existingCartItem.quantity === 1) {
        // Remove the item from the cart if its quantity is 1
        const updatedCart = cart.filter((cartItem) => cartItem.item.title !== selectedBook.title);
        setCart(updatedCart);
      } else {
        // Decrease the quantity by 1 if it's greater than 1
        existingCartItem.quantity -= 1;
        setCart([...cart]);
      }
    }
  };
  

  const handleToggleCart = (e) => {
    e.stopPropagation();
    alert("Cart is toggled!");
    setIsCartVisible(!isCartVisible);
  };
  const calculateTotalPrice = () => {
    return cart.reduce((total, cartItem) => {
      return total + cartItem.item.price * cartItem.quantity;
    }, 0);
  };
  
  

  const currentCard = books[currentIndex];
  const currentImage = currentCard.image[currentImageIndex].toString();
  console.log("currentCard.title",currentCard.title,"currentImage",currentImage)  


  return (
    <div>
      <Header />
      <div style={buttonContainerStyles}>
        <button style={buttonStyles} onClick={handleNextClick}>Next</button>

        <button style={buttonStyles} onClick={handlePrevClick}>Prev</button>
        <button style={buttonStyles} onClick={handleNextImageClick}>Next Image</button>
        <button style={buttonStyles} onClick={handleAddToCart}>Add to Cart</button>
        <button style={buttonStyles} onClick={handleRemoveFromCart}>Remove from Cart</button>
        <button style={buttonStyles} onClick={handleToggleCart}>View Cart</button>
       
      </div>
      <div> {currentCard && (
        <div key={currentCard.title}>
          <Cardcomponent
            title={currentCard.title}
            author={currentCard.author}
            price={currentCard.price}
            stock={currentCard.stock}
            genre={currentCard.genre}
            description={currentCard.description}
            image={currentImage}

          />
        </div>
      )}</div>
    
      {isCartVisible && <Showcart cart={cart} calculateTotalPrice={calculateTotalPrice} />}
    <AddBookPage onAddBook={addBook} newBook={newBook} setNewBook={setNewBook}/> 


    <Footer />
    </div>
  );
}

export default App;