import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import New from "./pages/New";
import Celebrity from "./pages/Celebrity";
import Ship from "./pages/Ship";
import Shop from "./pages/Shop";
import Velvets from "./pages/Velvets";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <Router>
      <div data-aos="fade-down" data-aos-duration="600">
        <Navbar />
      </div>
      
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/celebrity" element={<Celebrity />} />
          <Route path="/ship" element={<Ship />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/velvets" element={<Velvets />} />
        </Routes>
      
      <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
        <Footer />
      </div>
    </Router>
  );
}
