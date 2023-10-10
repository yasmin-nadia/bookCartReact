import React from "react";
import { useState ,useEffect} from "react"; 
import { Link } from "react-router-dom";
import "../../app.css";

const Adminnavbar = () => {
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  const toggleLoginOptions = () => {
    setShowLoginOptions(!showLoginOptions);
  };
  return (
    <div className="header-container">
      <img
        className="header-logo"
        title="Design for you"
        alt="Designs"
        src="https://t3.ftcdn.net/jpg/00/59/63/30/240_F_59633034_GHlAAALTnXLdBeLPpEQWjzZhsad3QtNX.jpg"
      />
      <div>
        <Link to="/" className="header-link">
          HOME
        </Link>
      </div>
      <div className="header-dropdown">
        <div className="header-link" onClick={toggleLoginOptions}>
          Login &#9662;
        </div>
        {showLoginOptions && (
          <div className="dropdown-content">
            <Link to="/login/admin" className="header-link">
              Login as Admin
            </Link>
            <Link to="/login/user" className="header-link">
              Login as User
            </Link>
          </div>
        )}
      </div>
      <div>
        <Link to="/search" className="header-link">
          Search
        </Link>
      </div>
      <div>
        <Link to="/createuser" className="header-link">
          Create new user
        </Link>
      </div>
      <div>
        <Link to="/createbook" className="header-link">
          Add product
        </Link>
      </div>
      <div>
        <Link to="/updatebook" className="header-link">
          Update product
        </Link>
      </div>
      <div>
        <Link to="/deletebook" className="header-link">
          Delete product
        </Link>
      </div>
      <div>
        <Link to="/userlist" className="header-link">
          Show user
        </Link>
      </div>
      
    </div>
  );
};

export default Adminnavbar;
