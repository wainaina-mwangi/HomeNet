import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import TopNavbar from "./components/TopNavbar";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider }from "./pages/ThemeContext";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <TopNavbar/>
      <Navbar />
      <Hero/>
      <Routes>
        {/* <Route path=''  element={}/> */}

        
      </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
