// useShowtranHook.js
import { useState } from "react"; // Import useState if not already imported
import axiosInstance from "../../utils/axiosInstance";
const check = localStorage.getItem("token");

const useShowtranHook = () => {
  const [loading_one, setLoading] = useState(false);
  const [responseData, setResponseData] = useState("");
  console.log("check", check);
  const createTransaction = () => {
    axiosInstance
      .get(
        "/showtransaction",
        {},
        {
          headers: {
            Authorization: `Bearer ${check}`,
          },
        }
      )
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log("responseData from hook success", data);
      })
      .catch((error) => {
        setLoading(false);
        console.log("responseData from hook error");
      });
  };

  return {
    createTransaction,
    loading_one,
    responseData,
  };
};

export default useShowtranHook;
