import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbarMain">
      <div className="navbarLogo">
        <LinkScroll to="hero" smooth={true}>
          {" "}
          <svg
            width="50"
            height="30"
            viewBox="0 0 108 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M65.6527 45.9776V72.9004H103.34L107.137 64.8379V64.3691H75.0277V45.9776H84.2431V35.4529H75.0277V0.244114H74.559L65.6527 4.46286V35.4529H21.4192V45.9776H65.6527ZM0.665989 5.85349V74.291H23.4004C30.5254 74.291 36.3066 72.0254 40.7441 67.4941C44.9629 63.1816 47.0722 57.6347 47.0722 50.8535V49.791H37.6972V50.8535C37.6972 55.041 36.5722 58.4316 34.3222 61.0254C31.541 64.2441 27.9004 65.8535 23.4004 65.8535H10.041V11.9472H23.4004C27.9004 11.9472 31.541 13.5566 34.3222 16.7754C36.5722 19.3691 37.6972 22.7597 37.6972 26.9472V30.791H47.0722V26.9472C47.0722 20.1347 44.9629 14.5879 40.7441 10.3066C36.3066 5.77536 30.5254 3.50974 23.4004 3.50974H5.63474L0.665989 5.85349Z"
              fill="white"
            />
          </svg>
        </LinkScroll>
      </div>
      <div className="navbarLinks">
        <ul>
          <li className="link">
            <LinkScroll to="about" smooth={true} activeClass="active">
              {" "}
              About Me{" "}
            </LinkScroll>
          </li>
          <li className="link">
            <LinkScroll to="courses" smooth="true">
              Courses
            </LinkScroll>
          </li>
          <li className="link">
            <Link to="/design">UX/UI</Link>
          </li>
          <li className="link">
            <Link to="/frontend">Front-end</Link>
          </li>
          <li className="link">
            <LinkScroll to="contact" smooth={true}>
              Contact Me{" "}
            </LinkScroll>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
