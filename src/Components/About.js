import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="aboutMain" id="about">
      <h3 className="sectionTitle">About</h3>
      <div className="content">
        <div className="profilePhoto">
          <img src={process.env.PUBLIC_URL + "photo.jpg"} />
        </div>

        <div className="description">
          Based in South Korea, originaly from Poland. I am frontend developer
          and fresh graduate from Korea University majoring in Computer Science
          and Engineering and Language, Brain and Computers. I am passionate
          about web design, gaming, animations, languages, and learning.
          <h3>Skills</h3>
          <ul>
            <li>Frontend development, UX/UI design</li>
            <li>JavaScript, CSS, HTML, ReactJS</li>
            <li>AdobeXD, Figma</li>
          </ul>
          <h3>Contact</h3>
          <ul id="aboutContact">
            <li>
              <a
                href="https://www.linkedin.com/in/dagmara-luk/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <img
                  className="icon"
                  src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/daga96"
                target="_blank"
                rel="noreferrer"
                title="Github"
              >
                <img
                  className="icon"
                  src="https://img.icons8.com/material-rounded/24/ffffff/github.png"
                />
              </a>
            </li>
            <li>
              <span>
                {" "}
                Download my <button id="resume">resume</button>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
