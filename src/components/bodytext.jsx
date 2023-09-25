const MotivationalText = () => {
    const paragraphStyle = {
        fontSize: "50px",
        color: "#527a7a",
        textAlign: "center",
        margin: "20px 0",
        fontWeight: "bold", 
        textShadow: "2px 2px 6px rgba(0, 0, 0, 1)", 
    };

    const motivationalText = "Believe in Yourself, Stay Positive, Keep Going";

    return (
        <p style={paragraphStyle}>
            {motivationalText}
        </p>
    );
}

export default MotivationalText;
