import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Stats from "../components/Stats";
import Sponsors from "../components/Sponsors";
import Sponsors1 from "../components/Sponsors1";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroSection /><br></br>
      <Sponsors />
      <Stats />
      <Sponsors1/>
      <Footer />
    </div>
  );
};

export default Home;
