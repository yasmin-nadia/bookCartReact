import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";
import { login } from "../../redux/slices/lognslice";
import { useNavigate } from "react-router-dom";
const useLoginAdminHook = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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

        console.log("Successfully logged in:", data);
        localStorage.setItem("responseData", data.message);
        return data;
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error adding user:", error);
        throw error;
      })
      .finally(() => {
        navigate("/userloggedin");
      });
  };

  return { createLogin, loading };
};

export default useLoginAdminHook;
