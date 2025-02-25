import { motion } from "framer-motion";
import React, { useState } from "react";
import HackIndiaLogo from "../assets/H_image.png";
import SINGULARITY from "../assets/singulararityNET.png";

const tabs = [
  "Overview",
  "Create Team",
  "Prizes & Sponsors",
  "FAQs",
  "Judging & Rules",
  "Resources",
];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (

    <section 
    style={{ backgroundImage: "url(/src/assets/Background_Video.png)" }}
    className="bg-cover bg-center text-white py-6 text-center">
      <div className="flex flex-col md:flex-row justify-between items-center py-3 px-6">
        <div className="flex ml-[5rem] gap-2">
          <motion.img
            src={HackIndiaLogo}
            alt="HackIndia Logo"
            width="40"
            height="40"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <span className="text-lg font-bold text-white">HACKINDIA</span>
        </div>
        <div className="flex flex-wrap mr-[9rem] bg-[#220031] px-4 py-2 rounded-lg border border-[#B026FF] shadow-lg">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              className={`relative px-4 py-2 mx-1 text-white font-medium rounded-lg border border-[#B026FF] transition-all duration-300
                ${
                  activeTab === tab
                    ? "bg-[#B026FF] text-white shadow-md scale-105"
                    : "bg-transparent hover:bg-[#3B015F] hover:scale-105"
                }`}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>
      </div>
      <motion.div 
        className="flex justify-center mt-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src={SINGULARITY} alt="SingularityNET Logo" width="260" height="100" />
      </motion.div>
      <div className="max-w-5xl mx-auto px-4 mt-6">
        <motion.h4
          className="text-6xl md:text-8xl font-extrabold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-amber-100 bg-amber-600 px-2 rounded">Ha</span>ckIndia 2025
        </motion.h4>
        <motion.p
          className="mt-4 text-lg md:text-3xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          India's Biggest Web3 & AI Hackathon
        </motion.p>
        <motion.div
          className="mt-6 w-fit mx-auto bg-purple-500 px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-lg md:text-xl font-semibold">February 28 - September 28</p>
        </motion.div>
        <motion.div 
          className="flex flex-wrap justify-center mt-6 text-xl md:text-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-center">
            <span className="text-amber-700 font-bold">$150K+ </span> Prize Pool |{" "}
            <span className="text-amber-700 font-bold">150+ </span> Universities |{" "}
            <span className="text-amber-700 font-bold">25,000+ </span> Students
          </p>
        </motion.div>
        <motion.button
          className="mt-8 px-8 py-4 bg-purple-600 text-white font-bold text-lg rounded-lg border-4 border-purple-500 hover:bg-purple-800 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Register Now
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
