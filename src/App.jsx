import React from "react";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero"
import TopNavbar from "./components/TopNavbar";
import About from "./components/About";
import NotFoundPage from "./components/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider }from "./pages/ThemeContext";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <TopNavbar/>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/about'  element={<About/>}/>
        <Route path="*" element={<NotFoundPage />} />

        
      </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
