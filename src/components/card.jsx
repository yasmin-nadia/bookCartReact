import React from "react";
const Cardcomponent=({title,author,price,stock,genre,description,image})=>{
    const cardStyles = {
        border: "1px solid",
        alignItems: "center",
        display: "flex",
        flexDirection: "column", // Center horizontally and vertically
        justifyContent: "center", // Center horizontally and vertically
        padding: "2px",
        backgroundColor: "#d9b38c", // Background color
        color: "#333", // Text color
        textAlign: "center", // Center text
      };
    return(
        <div style={cardStyles}>
            <h1>Title:{title}</h1>
            <h2>author:{author}</h2>
            <p>Price:$ {price}</p>
            <p>Stock: {stock}</p>
            <p>Genre: {genre}</p>
            <p>Description: {description}</p>
            <img src={image} style={{ width: "200px", height: "200px" }} />
        </div>
    )
}
export default Cardcomponent;