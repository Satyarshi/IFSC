import React from "react";
import Hero from "../components/home/Hero";
import IfscInfo from "../components/home/IfscInfo";
import IfscStructure from "../components/home/IfscStructure";

const Home = () => {
  return (
    <div className="main">
      <Hero />
      <IfscInfo />
      <IfscStructure />
    </div>
  );
};

export default Home;
