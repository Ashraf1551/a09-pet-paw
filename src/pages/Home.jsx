import React from "react";
import Slider from "../component/Slider";
import PopularSection from "../component/PopularSection";
import Expert from "../component/Expert";
import PetCare from "../component/PetCare";

const Home = () => {
  return (
    <div>
      <title>Home</title>
      <Slider></Slider>
      <PopularSection></PopularSection>
      <Expert></Expert>
      <PetCare></PetCare>
    </div>
  );
};

export default Home;
