const Bodynotes = () => {
  const boxContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
  };

  const boxStyle = {
    width: "150px",
    height: "150px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#527a7a",
    color:"white",
    fontSize: "24px",
    
  };

  const motivationalTexts = [
    "Believe in Yourself",
    "Stay Positive",
    "Keep Going",
    "Dream Big",
  ];

  return (
    <div>
    
      <div style={boxContainerStyle}>
        {motivationalTexts.map((text, index) => (
          <div key={index} style={boxStyle}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bodynotes;
