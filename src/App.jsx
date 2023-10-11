import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Usernavbar from "./components/user/usernavbar";
import Adminnavbar from "./components/admin/adminnavbar";
import Logout from "./pages/logout";
import Button from "./components/common/button";
// import Carddata from "./components/carddata";
import "./App.css";
import { AuthProvider } from "./pages/AuthContext";
import { useAuth } from "./pages/AuthContext";
// import Addtocart from "./components/addtocart";
// import Showcart from "./components/showcart";
// import Cardcomponent from "./components/card";
// import Addbookform from "./pages/addbook";
// import AddBookPage from "./pages/addbookpage";
import FetchDemo from "./pages/fetchDemo";
import FetchPost from "./pages/fetchPost";
import FetchUpdate from "./pages/fetchUpdate";
import FetchDelete from "./pages/fetchDelete";
import DebounceDemo from "./pages/deboundsdemo";
import FetchUserPost from "./pages/addUser";
import ProductDetails from "./pages/productsDetailPage";
import Login from "./pages/login";
import LoginAdmin from "./pages/loginAdmin";
import Authenticate from "./pages/authenticate";
import Authenticateadmin from "./pages/authenticateadmin";
import UserList from "./pages/userList";
import Blog from "./pages/blogs";
import CartList from "./pages/showCart";
import ShowCheckout from "./pages/checkout";
import ShowTranList from "./pages/showtransaction";
import Userloggedin from "./pages/loginUser";
import UpdatePost from "./pages/updateuser";
import DeletePost from "./pages/deleteuser";
import { useDispatch } from "react-redux";
import { login } from "./redux/slices/lognslice";

import FetchUsers from "./pages/showalluser";

function App() {
  // const role = localStorage.getItem("logindata");
  const [role, setRole] = useState(localStorage.getItem("logindata"));
  const handleLogout = () => {
    localStorage.removeItem("logindata");
    localStorage.removeItem("token");
    localStorage.removeItem("responseData");
    console.log("handlelogout working");
    navigate("/");
  };
  const dispatch = useDispatch();

  useEffect(() => {
    setRole(localStorage.getItem("logindata"));
    if (role) {
      dispatch(login(role));
    }
  }, [dispatch]);
  // const role = localStorage.getItem("logindata");

  return (
    <div>
      <BrowserRouter>
        {/* <AuthProvider> */}
        {/* {role === "user" ? <Usernavbar /> : <Header />} */}
        {role === "user" ? <Usernavbar /> : null}
        {role === "admin" ? <Adminnavbar /> : null}
        {role !== "user" && role !== "admin" ? <Header /> : null}
        {/* <Header /> */}

        <Routes>
          <Route path="/search" element={<DebounceDemo />} />
          <Route path="/" element={<FetchDemo />} />

          <Route path="/userdetails" element={<Blog />} />
          <Route element={<Authenticateadmin />}>
            <Route path="/userlist" element={<UserList />} />
            <Route path="/createbook" element={<FetchPost />} />
            <Route path="/updatebook" element={<FetchUpdate />} />
            <Route path="/createuser" element={<FetchUserPost />} />
            <Route path="/updateuser" element={<UpdatePost />} />
            <Route path="/deletebook" element={<FetchDelete />} />
            <Route path="/alltheusers" element={<FetchUsers />} />
            <Route path="/deleteuser" element={<DeletePost />} />
          </Route>
          <Route element={<Authenticate />}>
            <Route path="/cart" element={<CartList />} />
            <Route path="/showcheckout" element={<ShowCheckout />} />
            <Route path="/showtransaction" element={<ShowTranList />} />
          </Route>
          <Route path="/products/:productId" element={<ProductDetails />} />

          <Route path="/userloggedin" element={<Userloggedin />} />
          <Route path="/login/user" element={<Login />} />
          <Route path="/logout/user" element={<Logout />} />
          <Route path="/login/admin" element={<LoginAdmin />} />
          <Route path="/logout/admin" element={<Logout />} />
        </Routes>

        {/* </AuthProvider> */}
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
