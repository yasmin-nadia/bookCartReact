import React, { useEffect } from "react";
import useShowtranHook from "../hooks/user/useShowtranHook"; 

import "../App.css";

const ShowTranList = () => {
  const { responseData } = useShowtranHook();
 


  useEffect(() => {
    console.log("responseData", responseData,"from jsx");
  }, [responseData]);

  

  return <div className="fetch-demo-container">something</div>;
};
export default ShowTranList;