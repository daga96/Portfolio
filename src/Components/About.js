import React from "react";
import "./About.css";
import photo from "../photo.jpg";

const About = () => {
  return (
    <div className="aboutMain" id="about">
      <h3 className="sectionTitle">About</h3>
      <div className="content">
        <div className="profilePhoto">
          <img src={photo} alt="photo" id="photo" />
        </div>

        <div className="description">
          <span className="descSpan" data-text="Front-end developer">
            Front-end developer
          </span>
          <span className="descSpan1">and UX designer.</span>

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
