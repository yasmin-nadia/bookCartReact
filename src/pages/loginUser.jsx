import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import useLoginHook from "../hooks/admin/useLoginHook";
import { useAuth } from "./AuthContext";
import "../App.css";

const Userloggedin = () => {
    console.log("Userloggedin is working")
    const { responseData } = useAuth(); 
    console.log("responseData",responseData,"responseData")
  return (
    <div>
     {responseData}
    </div>
  );
};

export default Userloggedin;
