import { useState, useEffect } from "react";
const useProductDeleteHook = () => {
  const [loading, setLoading] = useState(false);

  const createDelete = (formData) => {
    fetch("http://127.0.0.1:8001/mybooks/deletebook", {
      method: "DELETE",
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
        setLoading(false);

        console.log("Successfully delete book:", data);
      })
      .catch((error) => {
        setLoading(false);

        console.error("Error deleting book:", error);
      });
  };
  return { createDelete, loading };
};

export default useProductDeleteHook;
