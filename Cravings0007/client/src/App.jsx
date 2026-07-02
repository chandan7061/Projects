import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contactus from "./pages/Contactus";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Toaster} from "react-hot-toast";
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Toaster/>
      
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
