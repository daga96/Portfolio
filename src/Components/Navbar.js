import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [state, setState] = useState(false);

  function handleClick() {
    setState(!state);
  }
  const location = useLocation();
  return (
    <div className="navbarMain">
      <div className="navbarLogo">
        {location.pathname === "/Portfolio" ? (
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
        ) : (
          <Link to="/Portfolio">
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
          </Link>
        )}
      </div>
      <div className="navbarLinks">
        <div className="menuIcon" onClick={handleClick}>
          {state ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.645993 0.646C0.692439 0.599437 0.747614 0.562494 0.80836 0.537287C0.869105 0.512081 0.934226 0.499106 0.999993 0.499106C1.06576 0.499106 1.13088 0.512081 1.19163 0.537287C1.25237 0.562494 1.30755 0.599437 1.35399 0.646L3.99999 3.293L6.64599 0.646C6.69248 0.599512 6.74767 0.562636 6.80841 0.537477C6.86915 0.512317 6.93425 0.499368 6.99999 0.499368C7.06574 0.499368 7.13084 0.512317 7.19158 0.537477C7.25232 0.562636 7.30751 0.599512 7.35399 0.646C7.40048 0.692488 7.43736 0.747677 7.46252 0.808416C7.48768 0.869156 7.50062 0.934256 7.50062 1C7.50062 1.06574 7.48768 1.13084 7.46252 1.19158C7.43736 1.25232 7.40048 1.30751 7.35399 1.354L4.70699 4L7.35399 6.646C7.40048 6.69249 7.43736 6.74768 7.46252 6.80842C7.48768 6.86916 7.50062 6.93426 7.50062 7C7.50062 7.06574 7.48768 7.13084 7.46252 7.19158C7.43736 7.25232 7.40048 7.30751 7.35399 7.354C7.30751 7.40049 7.25232 7.43736 7.19158 7.46252C7.13084 7.48768 7.06574 7.50063 6.99999 7.50063C6.93425 7.50063 6.86915 7.48768 6.80841 7.46252C6.74767 7.43736 6.69248 7.40049 6.64599 7.354L3.99999 4.707L1.35399 7.354C1.30751 7.40049 1.25232 7.43736 1.19158 7.46252C1.13084 7.48768 1.06574 7.50063 0.999993 7.50063C0.934249 7.50063 0.869149 7.48768 0.80841 7.46252C0.74767 7.43736 0.692481 7.40049 0.645993 7.354C0.599505 7.30751 0.562629 7.25232 0.53747 7.19158C0.512311 7.13084 0.499362 7.06574 0.499362 7C0.499362 6.93426 0.512311 6.86916 0.53747 6.80842C0.562629 6.74768 0.599505 6.69249 0.645993 6.646L3.29299 4L0.645993 1.354C0.59943 1.30755 0.562487 1.25238 0.537281 1.19163C0.512074 1.13089 0.4991 1.06577 0.4991 1C0.4991 0.934233 0.512074 0.869111 0.537281 0.808366C0.562487 0.747621 0.59943 0.692446 0.645993 0.646Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="40"
              height="40"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 14.5H16.495M4.5 6.5H16.5H4.5ZM4.498 10.5H16.495H4.498Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </div>
        <ul className={state ? "navMenu active" : "navMenu"}>
          {location.pathname === "/Portfolio" ? (
            <li className="link" onClick={handleClick}>
              <LinkScroll to="about" smooth={true} activeClass="active">
                {" "}
                About Me{" "}
              </LinkScroll>
            </li>
          ) : (
            <li className="link" onClick={handleClick}>
              <Link to="/Portfolio">About Me</Link>
            </li>
          )}
          {location.pathname === "/Portfolio" ? (
            <li className="link" onClick={handleClick}>
              <LinkScroll to="courses" smooth="true">
                Courses
              </LinkScroll>
            </li>
          ) : (
            <li className="link" onClick={handleClick}>
              <Link to="/Portfolio">Courses</Link>
            </li>
          )}
          <li className="link" onClick={handleClick}>
            <Link to="Portfolio/design">UX/UI</Link>
          </li>
          <li className="link" onClick={handleClick}>
            <Link to="Portfolio/frontend">Projects</Link>
          </li>
          {location.pathname === "/Portfolio" ? (
            <li className="link" onClick={handleClick}>
              <LinkScroll to="contact" smooth={true}>
                Contact Me{" "}
              </LinkScroll>{" "}
            </li>
          ) : (
            <li className="link" onClick={handleClick}>
              <Link to="/Portfolio">Contact Me</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
