import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="Hero" id="hero">
      <div className="text">
        <h5 className="helloText">Hello, I'm</h5>
        <h2 className="nameClass">
          Dagmara
          <span>Dagmara</span>
          <span>Dagmara</span>
          <span>frontend developer and UX Designer. </span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;