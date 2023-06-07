import React from "react";
import Rooms from "../Components/Home/Rooms";
import HeroSection from "../Components/HeroSection";

const Home = () => {
  return (
    <div className="app-content">
      {/* rooms */}
      <HeroSection />
      <Rooms />
    </div>
  );
};

export default Home;
