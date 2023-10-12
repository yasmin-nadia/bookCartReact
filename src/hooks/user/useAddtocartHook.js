import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import axiosInstance from "../../utils/axiosInstance";
const useAddtocartHook = () => {
  const [loading, setLoading] = useState(false);
const navigate=useNavigate()
  const createPost = (formData) => {
    setLoading(true);
    axiosInstance
      .post("/addtocart", formData)
      .then((response) => {response.data
      localStorage.setItem("addcartmsg",response.data.message)})
      .then((data) => {
        setLoading(false);
        console.log("Successfully added to cart:", data);
        return data;
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error adding to cart:", error);
        throw error;
      }) .finally(() => {
      
        // navigate("/addcartmsg");
        // }
      });
  };
  const deletePost = (formData) => {
    setLoading(true);
    axiosInstance
      .delete("/removefromcart", { data: formData })
      .then((response) => {response.data
        localStorage.setItem("removecartmsg",response.data.message)
      })
      .then((data) => {
        setLoading(false);
        console.log("Successfully delete from cart:", data);
        return data;
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error deleting from to cart:", error);
        throw error;
      }).finally(() => {
      
        // navigate("/removecartmsg");
        // }
      });
  };
  return { createPost,deletePost, loading };
};

export default useAddtocartHook;
