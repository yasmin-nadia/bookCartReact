import { Navigate, Outlet, useLocation } from "react-router-dom";
import axios from "axios";
// import jwt from "jsonwebtoken"; 
import jwtDecode from "jwt-decode";
const Authenticateadmin = () => {
  const location = useLocation();
  const check = localStorage.getItem("token");

  const decodedToken = jwtDecode(check);

  console.log("token", check, "location", location);
  if (check && decodedToken && decodedToken.role === "admin") {
    return <Outlet />;
  } else {
    return <Navigate to="/login/admin" />;
  }
  
};

export default Authenticateadmin;
