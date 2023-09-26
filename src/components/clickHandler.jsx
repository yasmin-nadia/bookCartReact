const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Carddata.length);
  };
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Carddata.length - 1 : prevIndex - 1
    );
  };
  const handleNextImageClick = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % Carddata[currentIndex].image.length
    );
  };
  const handleAddToCart = () => {
    const selectedBook = Carddata[currentIndex];
    setCart([...cart, selectedBook]);
  };

  const handleToggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  export {handleNextClick,handlePrevClick,handleNextImageClick,handleAddToCart,handleToggleCart,calculateTotalPrice}