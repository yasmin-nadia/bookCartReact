import Button from "./button";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#604020",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1px 90px",
        position: "relative",
        color: "white",
      }}
    >
      <img
        className="mk-sticky-logo "
        title="Design for you"
        alt="Designs"
        src="https://t3.ftcdn.net/jpg/00/59/63/30/240_F_59633034_GHlAAALTnXLdBeLPpEQWjzZhsad3QtNX.jpg"
        style={{ width: "100px", height: "auto" }}
      ></img>
      <div>
        <Link to="/"> HOME</Link>
      </div>
      <div>
        <Link to="/search">Search</Link>
      </div>
      <div>
        <Link to="/createuser">Create new user</Link>
      </div>
      <div>
        <Link to="/createbook">Add product</Link>
      </div>
      <div>
        <Link to="/updatebook">Update product</Link>
      </div>
      <div>
        <Link to="/deletebook">Delete product</Link>
      </div>
      <Button />
    </div>
  );
};
export default Header;
