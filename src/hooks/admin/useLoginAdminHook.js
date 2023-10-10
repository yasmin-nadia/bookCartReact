import { useState, useEffect, useContext } from "react";

import axiosInstance from "../../utils/axiosInstance";

const useLoginAdminHook = () => {
  const [loading, setLoading] = useState(false);

  const createLogin = (formData) => {
    setLoading(true);
    console.log("formData", formData);
    axiosInstance
      .post("/login", formData)
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        const token = data.data.token;
        localStorage.setItem("token", token);

        console.log("Successfully logged in:", data.data.token);
        return data;
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error adding user:", error);
        throw error;
      });
  };

  return { createLogin, loading };
};

export default useLoginAdminHook;
