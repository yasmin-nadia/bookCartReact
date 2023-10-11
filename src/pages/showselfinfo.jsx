import React, { useEffect } from "react";
import jwtDecode from "jwt-decode";

import "../App.css";

const ShowSelfInfo = () => {
  if (token !== "undefined") {
    token = localStorage.getItem("token");
    console.log("defined?", token);

    const decodedToken = jwtDecode(token);
  }
  console.log("self user info ", decodedToken);

  return <div className="checkout-container"></div>;
};

export default ShowSelfInfo;
