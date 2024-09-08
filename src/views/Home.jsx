import React from "react";
import Hero from "../components/home/Hero";
import IfscStructure from "../components/home/IfscStructure";
import IfscCode from "../components/home/IfscCode";

const Home = () => {
  return (
    <div className="main">
      <Hero />
      <IfscCode />
      <IfscStructure />
    </div>
  );
};

export default Home;
