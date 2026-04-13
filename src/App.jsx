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
import { useState, useEffect, Suspense } from "react";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-brand-option transition-colors duration-300">
      <ToastContainer position="top-center" reverseOrder={false} />
      <ThemeProvider>
        <ScrollToTop />
        <TopNavbar />
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/plans" element={<Plans />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </div>
  );
};

export default App;
