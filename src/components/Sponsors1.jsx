import { motion } from "framer-motion";
import sponser_singularity from "../assets/sponser_singularity.png";
import Rair from "../assets/rair.png";
import Stratis from "../assets/stratis.png";
import Sharp_Economy from "../assets/sharp_economy.png";
import Csharp from "../assets/csharp.png";
import Beyond from "../assets/beyond_the_code.png";

const sponsors = [
  { src: sponser_singularity, alt: "Singularity" },
  { src: Rair, alt: "Rair" },
  { src: Stratis, alt: "Stratis" },
  { src: Sharp_Economy, alt: "Sharp Economy" },
  { src: Csharp, alt: "C# Foundation" },
  { src: Beyond, alt: "Beyond The Code" },
];

const Sponsors1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white py-6"
    >
      <div className="flex flex-wrap justify-around items-center gap-6 px-6 md:px-12">
        {sponsors.map((sponsor, index) => (
          <motion.img
            key={index}
            src={sponsor.src}
            alt={sponsor.alt}
            width="170"
            height="38"
            className="w-auto h-14 md:h-16 max-w-[170px]"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Sponsors1;
