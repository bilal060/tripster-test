import React from "react";
import Rooms from "../Components/Home/Rooms";
import Review from "../Components/Home/Review";

const Home = () => {
  return (
    <div className="app-content">
      {/* rooms */}
      <Rooms />

      {/* Review */}
      <Review />
    </div>
  );
};

export default Home;
