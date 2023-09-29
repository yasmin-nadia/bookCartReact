import { useState, useEffect } from "react";
const useProductUpdateHook = () => {
  const [loading, setLoading] = useState(false);

  const createUpdate = (formData) => {
    setLoading(true);
    fetch("http://127.0.0.1:8001/mybooks/updatebook", {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          //   throw new Error(`Network response was not ok: ${response.status}`);
          console.log("`Network response was not ok:", error);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Successfully Updated book:", data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);

        console.error("Error adding book:", error);
      });
  };
  return { createUpdate, loading };
};

export default useProductUpdateHook;
