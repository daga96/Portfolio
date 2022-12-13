import React from "react";
import "./Hero.css";
import { Link as LinkScroll } from "react-scroll";

const Hero = () => {
  return (
    <div className="Hero" id="hero">
      <div className="text">
        <h5 className="helloText">Hello, I'm</h5>
        <h2 className="nameClass">
          Dagmara
          <span>Dagmara</span>
          <span>Dagmara</span>
          <span>full stack developer and UX Designer. </span>
        </h2>
      </div>
      <LinkScroll to="about" smooth={true}>
        <div class="arrowButton">
          <svg
            width="55"
            height="32"
            viewBox="0 0 55 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="one"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.4507 22.7963L4.66191 0.00751495L0.419266 4.25015L23.2081 27.039L23.2031 27.044L27.4458 31.2866L27.4507 31.2816L27.4557 31.2866L31.6984 27.044L31.6934 27.039L54.4822 4.25016L50.2396 0.00752258L27.4507 22.7963Z"
              fill="white"
            />
            <path
              class="two"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.4507 22.7963L4.66191 0.00751495L0.419266 4.25015L23.2081 27.039L23.2031 27.044L27.4458 31.2866L27.4507 31.2816L27.4557 31.2866L31.6984 27.044L31.6934 27.039L54.4822 4.25016L50.2396 0.00752258L27.4507 22.7963Z"
              fill="white"
            />
          </svg>
        </div>
      </LinkScroll>
    </div>
  );
};

export default Hero;
