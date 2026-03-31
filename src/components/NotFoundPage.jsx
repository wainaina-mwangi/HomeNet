import React from "react";
import { LuMoveLeft } from "react-icons/lu";
import './NotFound.css'

const NotFoundPage = () => {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-brand-navy p-6 font-sans">
      <div className=" found max-w-xl w-full flex flex-col items-center text-center bg-brand-backup">
        <h1 className="text-white text-8xl md:text-9xl font-black tracking-tighter">
          404
        </h1>

        <h2 className="text-white text-3xl md:text-4xl font-bold mt-4">
          Page not found
        </h2>

        <p className="text-brand-gray text-lg leading-relaxed max-w-md mt-4">
          The page you are looking for no longer exists. Perhaps you can return
          back to the site’s homepage and see if you can find what you are
          looking for.
        </p>

        <a
          href="/"
          className=" btn mt-10 inline-flex items-center gap-3 bg-brand-orange text-white px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform duration-200"
        >
          <LuMoveLeft className="w-4 h-4" />
          Back Home
        </a>
      </div>
    </main>
  );
};

export default NotFoundPage;
