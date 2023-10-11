import { useState, useEffect, useContext } from "react";
import axiosInstance from "../../utils/axiosInstance";
const userAddBalance = () => {
  const [loading, setLoading] = useState(false);

  const createPost = (formData) => {
    formData.balancedData = parseFloat(formData.balancedData);
    setLoading(true);
    axiosInstance
      .put("/addbalance", formData)
      .then((response) => {response.data
        console.log("response",response)
    localStorage.setItem("balanceData",response.data.message)})
      .then((data) => {
        setLoading(false);

        console.log("Successfully added to balance:", data);
        return data;
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error adding to balance:", error);
        throw error;
      });
  };
  return { createPost, loading };
};

export default userAddBalance;
