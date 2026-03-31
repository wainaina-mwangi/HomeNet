import React from "react";
import { MdArrowCircleLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFoundPage = () => {
  return (
    <main className=" bg  min-h-[80vh] w-full flex flex-col items-center justify-center bg-brand-navy p-6 font-sans">
      <div className=" found max-w-xl sm:max-w-sm w-full flex flex-col items-center text-center bg-brand-backup">
        <h1 className="text-white text-6xl md:text-5xl font-black tracking-tighter mb-7">
          404
        </h1>

        <h2 className="text-white text-3xl md:text-4xl font-bold mt-4">
          Page not found
        </h2>

        <p className="text-brand-white text-sm leading-relaxed max-w-md ">
          The page you are looking for no longer exists. Perhaps you can return
          back to the site’s homepage and see if you can find what you are
          looking for.
        </p>

        <Link
          to="/"
          className="btn flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/70 text-white font-bold py-3 px-8 rounded-2xl transition-all active:scale-95"
        >
            <MdArrowCircleLeft  size={25}/> Back Home 
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
