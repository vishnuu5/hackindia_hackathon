import { motion } from "framer-motion";
import LEFT from "../assets/sponser_left_img.png";
import RIGHT from "../assets/sponser_right_img.png";

const Sponsors = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center items-center bg-white py-6 space-x-4"
    >
      <motion.img
        src={LEFT}
        alt="Left Logo"
        width="740"
        height="38"
        className="max-w-full md:w-[740px] w-auto"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />

      <motion.img
        src={RIGHT}
        alt="Right Logo"
        width="600"
        height="38"
        className="max-w-full md:w-[600px] w-auto"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default Sponsors;
