import React from "react";
import "./About.css";
import photo from "../assets/photo.jpg";
import { SectionTitle } from "../UXPages/Layout";

const About = () => {
  return (
    <div className="aboutMain" id="about">
      <SectionTitle> About </SectionTitle>
      <div className="content">
        <div className="profilePhoto">
          <img src={photo} alt="myPhoto" id="photo" />
        </div>
        <div className="animatedText">
          <span className="descSpan" data-text="Full Stack  developer">
            Full Stack developer
          </span>
          <span className="descSpan1">and UX designer.</span>
        </div>
        <div className="descriptionAbout">
          <div className="smallDesc">
            <hr></hr>I like to create interesting{" "}
            <span className="colored">designs</span> and interactive{" "}
            <span className="colored">user interfaces</span> for web products. 
            I am passionate about backend with main focus on gaming.
            Recently graduated Korea University majoring Computer Science and
            Engineering and Language, Brain and Computer.
          </div>
          <h3>Skills</h3>
          <ul>
            <li>JavaScript, CSS, HTML, ReactJS, NodeJS, Koa, SQL, Python</li>
            <li>AdobeXD, Figma, MariaDB, Docker, Redis</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
