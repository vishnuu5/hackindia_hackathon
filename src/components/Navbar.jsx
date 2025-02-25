import { motion } from "framer-motion";
import React from "react";
import logo from "../assets/logodb-PhotoRoom 1.png";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#1a1a2e] text-white py-4 px-6 flex justify-between items-center border-b border-purple-600"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex items-center space-x-2 cursor-pointer"
      >
        <img src={logo} alt="DcodeBlock Logo" className="h-10 w-auto" />
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="relative px-6 py-2 border-2 border-purple-600 text-white uppercase tracking-wide text-sm rounded-lg bg-transparent hover:bg-purple-600 transition duration-300 ease-in-out"
      >
        Sign in
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
