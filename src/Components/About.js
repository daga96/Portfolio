import React from "react";
import "./About.css";
import photo from "../photo.jpg";
import { SectionTitle } from "../UXPages/Layout";

const About = () => {
  return (
    <div className="aboutMain" id="about">
      <SectionTitle> About </SectionTitle>
      <div className="content">
        <div className="profilePhoto">
          <img src={photo} alt="photo" id="photo" />
        </div>
        <div className="animatedText">
          <span className="descSpan" data-text="Front-end developer">
            Front-end developer
          </span>
          <span className="descSpan1">and UX designer.</span>
        </div>
        <div className="descriptionAbout">
          <div className="smallDesc">
            <hr></hr>I like to create interesting{" "}
            <span className="colored">designs</span> and interactive{" "}
            <span className="colored">user interfaces</span> for web products.
            Recently graduated Korea University majoring Computer Science and
            Engineering and Language, Brain and Computer.
          </div>
          <h3>Skills</h3>
          <ul>
            <li>JavaScript, CSS, HTML, ReactJS</li>
            <li>AdobeXD, Figma</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
