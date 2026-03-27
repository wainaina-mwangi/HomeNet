import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import { Routes, Route } from "react-router-dom";
import { ThemeProvider }from "./pages/ThemeContext";

const App = () => {
  return (
    <div>
      <ThemeProvider>
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
