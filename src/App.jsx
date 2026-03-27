import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider }from "./pages/ThemeContext";

const App = () => {
  return (
    <div className="container">
      <ThemeProvider>
      <Navbar />
      <Routes>
        {/* <Route path=''  element={}/> */}

        
      </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
