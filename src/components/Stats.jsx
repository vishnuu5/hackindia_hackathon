import { motion } from "framer-motion";
import SMOKE from "../assets/smoke_img.png";
import YOUTUBE from "../assets/youtube_img.png";

const stats = [{ number: "150+", label: "Universities Participating" }];
const stats1 = [
  { number1: "72+", label1: "Judges" },
  { number1: "21+", label1: "Hackathons" },
  { number1: "36+", label1: "Great Speakers" },
];

const Stats = () => {
  return (
    <section className=" bg-linear-to-bl from-violet-500 to-purple-900 text-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mr-[13rem]">
        <div className="relative flex flex-col space-y-4 md:space-y-2">
          <motion.img
            src={SMOKE}
            alt="Smoke Effect"
            className="absolute -top-10 w-48 md:w-60 opacity-80 mr-[3rem]"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 w-60 text-center transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white">{stat.number}</h2>
              <p className="text-white">{stat.label}</p>
            </motion.div>
          ))}
          <div className="grid grid-cols-3 gap-3">
            {stats1.map((stat, index) => (
              <motion.div
                key={index}
                className="p-4 text-center transition-transform transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-white">{stat.number1}</h2>
                <p className="text-white">{stat.label1}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={YOUTUBE}
            alt="YouTube Preview"
            className="w-[90%] md:w-[480px] rounded-lg shadow-2xl transition-transform transform hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;