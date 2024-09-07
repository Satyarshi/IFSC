import React from "react";
import Hero from "../components/home/Hero";
import SearchBox from "../components/home/SearchBox";
import HsnInfo from "../components/home/HsnInfo";
import HsnStructure from "../components/home/HsnStructure";
import SacStructure from "../components/home/SacStructure";
import HsnDeclaration from "../components/home/HsnDeclaration";

const Home = () => {
  return (
    <div className="main">
      <Hero />
      <SearchBox />
      <HsnInfo />
      <HsnStructure />
      <SacStructure />
      <HsnDeclaration />
    </div>
  );
};

export default Home;
