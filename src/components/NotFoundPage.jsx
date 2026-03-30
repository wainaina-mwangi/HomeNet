import React from "react";
import { Link } from "react-router-dom";
import { GoAlertFill } from "react-icons/go";
import { HiOutlineArrowLeft } from "react-icons/hi2";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center flex-col px-6 text-center">
      <div className="relative mb-3">
        <GoAlertFill size={100} className="text-amber-500 relative" />
      </div>

      <h1 className="text-8xl md:text-9xl dark:text-white font-black text-slate-900 tracking-tighter">
        404
      </h1>

      <div className="mt-4 mb-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Oops! Connection Lost.
        </h2>
        <p className="text-slate-600 max-w-sm mx-auto leading-relaxed">
          The page you are looking for doesn't exist or has been moved. Let's
          get you back to the homeNet homepage.
        </p>
      </div>

      {/* Modern Action Button */}
      <Link
        to="/"
        className="group btn flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-8 px-10 rounded-2xl transition-all"
      >
        <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Back To Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
