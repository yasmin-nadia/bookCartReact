import { useState } from "react";

const useProductAddHook = () => {
  const [loading, setLoading] = useState(false);

  const createPost = (formData) => {
    setLoading(true);
    return fetch("http://127.0.0.1:8001/mybooks/addbook", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          console.log("Network response was not ok:", response.status);
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        console.log("Successfully added book:", data);
        return data; // You can return data here if needed
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error adding book:", error);
        throw error; // You can re-throw the error here if needed
      });
  };

  return { createPost, loading };
};

export default useProductAddHook;
