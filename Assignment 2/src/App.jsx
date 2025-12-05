import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from  "./pages/auth/Login.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import Home from "./pages/Home.jsx";
import Error404 from "./pages/Error404.jsx";
import ForgetPassword from "./pages/auth/ForgetPassword.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    useEffect(() =>{
      AOS.init({
        duration: 1000,
        once: true,
      })
    })
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} /> 
      <Route path="/*" element={<Error404 />} />     
      <Route path="/forgetpassword" element={<ForgetPassword />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

