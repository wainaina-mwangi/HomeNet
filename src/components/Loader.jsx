import React from "react";
import { HashLoader } from "react-spinners";

const Loader = () => (
  <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-navy backdrop-blur-sm">
    <HashLoader color="#d6671c" size={80} speedMultiplier={1.2} />
    <br />
    <p className="loader  text-white font-semibold animate-pulse">
      Connecting to HomeNet...
    </p>
  </div>
);

export default Loader;
