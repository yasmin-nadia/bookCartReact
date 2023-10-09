import { useLocation } from "react-router-dom";
import useCheckoutHook from "../hooks/user/useCheckoutHook";
import { useEffect } from "react";

function ShowCheckout() {
  const { createCheckout, loading_one, data_r, responseData } =
    useCheckoutHook(); // Access responseData from location state

  useEffect(() => {
    console.log(responseData);
  }, [responseData]);
  //   console.log(responseData);
  return (
    <div>
      <h1>Checkout Page</h1>
      {responseData && <p>Response Data from Checkout: {responseData}</p>}
    </div>
  );
}
export default ShowCheckout;
