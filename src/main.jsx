// import React from "react";

// import App from "./App.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// Import necessary dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Import Provider
import store from "./redux/store";
// import ReactDOM from "react-dom/client"; // Import your Redux store
import App from "./App"; // Your root component

// Render your application with the Provider
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
