import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="aboutMain">
      <div className="header">
        <h5>About Me</h5>{" "}
      </div>
      <div className="content">
        <div className="profilePhoto"></div>
        <div className="description">
          Based in South Korea, originaly from Poland. I am aspiring frontend
          developer and fresh graduate (almost) from Korea University majoring
          in Computer Science and Engineering and Language, Brain and Computers.
          I am passionate about web design, gaming, animations, languages, and
          learning.
          <div className="clients">
            I have worked for
            <ul>
              <li>Myself</li>
              <li>Univeristy projects</li>
              <li>My Mom</li>
              <li>My friends</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
