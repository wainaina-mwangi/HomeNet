import React from "react";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero"
import TopNavbar from "./components/TopNavbar";
import About from "./components/About";
import NotFoundPage from "./components/NotFoundPage";
// import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./pages/ThemeContext";
import Home from "./pages/Home";
import Plans from "./components/Plans";

const App = () => {
  return (
    
     
    <div className="min-h-screen bg-white dark:bg-brand-option transition-colors duration-300">
      <ThemeProvider>
        <TopNavbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/plans" element={<Plans />} />
        </Routes>
        <ToastContainer />
         </ThemeProvider>
      </div>
   
  );
};

export default App;
