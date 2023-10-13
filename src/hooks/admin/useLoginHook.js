import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../pages/AuthContext";
import axiosInstance from "../../utils/axiosInstance";
import { login } from "../../redux/slices/lognslice";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
const useLoginHook = () => {
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState();
  // const [logindata, setIsLoggedIn] = useState();
  const showSuccessAlert = (message) => {
    Swal.fire({
      title: "Success",
      text: message,
      icon: "success",
    });
  };

  const showErrorAlert = (errorMessage) => {
    Swal.fire({
      title: "Error",
      html: errorMessage, // Use 'html' property to display HTML content
      icon: "error",
    });
  };
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
          showSuccessAlert(data.message);
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
        showErrorAlert(error.response.data.message);
        console.error("Error adding user:", error);
      });
    // .finally(() => {
    //   // // Always navigate, whether success or failure
    //   // // if (data && data.success) {
    //   // //   navigate("/u");
    //   // // } else {
    //   // console.log("Navigating to /userloggedin", responseData);
    //   navigate("/");
    //   // }
    // });
  };

  return { createLogin, loading };
};

export default useLoginHook;
