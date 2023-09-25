import Button from "./button" ;
const Header=()=>{
    return (
       <div style={{display: "flex", 
       flexDirection:"row", 
       backgroundColor:"#604020",
       justifyContent:"space-between",
       alignItems: "center",
       padding:"1px 90px",
       position:"relative",
       color:"white",
       }}>
        <img className="mk-sticky-logo " title="Design for you" alt="Designs" src="https://t3.ftcdn.net/jpg/00/59/63/30/240_F_59633034_GHlAAALTnXLdBeLPpEQWjzZhsad3QtNX.jpg" style={{ width: "100px", height: "auto" }}></img>
        <div>HOME</div>
        <div>SAMPLE DESIGNS</div>
        <div>ABOUT</div>
        <div>CONTACT US</div>
        <div>WEBSITE SPECIALS</div>
        <Button />
        </div>
    )
}
export default Header