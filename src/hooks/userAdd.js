import { useState, useEffect, useContext } from "react";

import axiosInstance from "../utils/axiosInstance";

const useAddHook = () => {
  const [loading, setLoading] = useState(false);

  const createPost = (formData) => {
    setLoading(true);
    const {
      confirmPassword,
      area,
      streetAddress,
      ...formDataWithoutConfirmPassword
    } = formData;
    const updatedFormData = {
      ...formDataWithoutConfirmPassword,
      address: {
        area,
        streetAddress,
      },
    };
    console.log("updatedFormData", updatedFormData);
    axiosInstance
      .post("/createuser", updatedFormData)
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log("Successfully added user:", data);
        return data;
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error adding user:", error);
        throw error;
      });
  };

  return { createPost, loading };
};

export default useAddHook;
