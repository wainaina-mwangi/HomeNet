import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDropupCircle } from "react-icons/io";

const FaqItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b faq-item border-slate-500  last:border-none">
      <button
        onClick={toggle}
        className="w-full py-6 flex justify-between items-center text-left group transition-all"
      >
        <span
          className={`text-lg font-bold transition-colors duration-300 ${
            isOpen ? "text-brand-orange" : "text-brand-orange "
          }`}
        >
          {question}
        </span>
        <motion.div
          animate={{
            rotate: isOpen ? 45 : 0,
            color: isOpen ? "#FF6D00" : "#FF6D00",
          }}
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
            <p className="pb-9 mt-7 text-dark  leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;
