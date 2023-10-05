import { Navigate, Outlet, useLocation } from "react-router-dom";
import axios from "axios";

const Authenticate = () => {
  const location = useLocation();
  const check = localStorage.getItem("token");
  console.log("token", check, "location", location);
  return check ? <Outlet /> : <Navigate to="/login" />;
};
export default Authenticate;
