import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDropupCircle } from "react-icons/io";

const FaqItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-slate-500 dark:border-white/10 last:border-none">
      <button
        onClick={toggle}
        className="w-full py-6 flex justify-between items-center text-left group transition-all"
      >
        <span className={`text-lg font-bold transition-colors duration-300 ${
          isOpen ? "text-brand-orange" : "text-white dark:text-slate-200"
        }`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0, color: isOpen ? "#FF6D00" : "#fbfbfc" }}
          className="text-2xl"
        >
         
         <IoIosArrowDropupCircle />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-9 mt-7 text-white dark:text-slate-400 leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;