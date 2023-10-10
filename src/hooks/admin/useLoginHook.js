import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../pages/AuthContext"; 
import axiosInstance from "../../utils/axiosInstance";

const useLoginHook = () => {
  const [loading, setLoading] = useState(false);
  // const [responseData, setResponseData] = useState();
  const navigate = useNavigate();
  const { setResponseData,responseData,setIsLoggedIn} = useAuth();
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
          setIsLoggedIn(true);
          // localStorage.setItem("token", token);
        }

        console.log("Successfully logged in:", data.message);
        setResponseData(data.message);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error adding user:", error);
      })
      .finally(() => {
        // Always navigate, whether success or failure
        if (data.success) {
          navigate("/u");
        }else{
          console.log("Navigating to /userloggedin",responseData);
          navigate("/userloggedin");
        }
        
      });
  };

  return { createLogin, loading };
};
export default useLoginHook;
