import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbarMain">
      <div className="navbarLogo">
        <Link to="/Portfolio">Dagmara</Link>
      </div>
      <div className="navbarLinks">
        <ul>
          <li className="link">
            <Link to="/about">About Me</Link>
          </li>
          <li className="link">My courses</li>
          <li className="link">Projects</li>
          <li className="link">Contact Me</li>
        </ul>
      </div>
    </div>
  );
}
