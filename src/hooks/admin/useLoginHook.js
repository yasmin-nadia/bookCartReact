import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../pages/AuthContext";
import axiosInstance from "../../utils/axiosInstance";
import { login } from "../../redux/slices/lognslice";
import { useSelector, useDispatch } from "react-redux";
const useLoginHook = () => {
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState();
  // const [logindata, setIsLoggedIn] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const createLogin = (formData) => {
    setLoading(true);
    console.log("formData", formData);
    axiosInstance
      .post("/login", formData)
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        if (data.success) {
          const token = data.data.token;
          // setIsLoggedIn(true);

          localStorage.setItem("logindata", data.data.role);
          localStorage.setItem("token", token);
          dispatch(login(data.data.role));
        }
        // setResponseData(data.message);
        console.log("Successfully logged in:", data);
        localStorage.setItem("responseData", data.message);
        // localStorage.setItem("responseData", responseData);
        // console.log("responseData login", responseData);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error adding user:", error);
      })
      .finally(() => {
        // Always navigate, whether success or failure
        // if (data && data.success) {
        //   navigate("/u");
        // } else {
        console.log("Navigating to /userloggedin", responseData);
        navigate("/userloggedin");
        // }
      });
  };

  return { createLogin, loading };
};

export default useLoginHook;
