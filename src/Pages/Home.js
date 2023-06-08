import React from "react";
import Rooms from "../Components/Home/Rooms";
import Review from "../Components/Home/Review";
import HeroSection from "../Components/HeroSection";

const Home = () => {
  return (
    <div className="app-content">
      <HeroSection />
      {/* rooms */}
      <Rooms />

      {/* Review */}
      <Review />
    </div>
  );
};

export default Home;
